import { OfficeStatus } from '../types';

export function getMakkahOfficeStatus(): OfficeStatus {
  // Saudi Arabia is UTC+3 with no daylight saving time
  const now = new Date();
  
  // Convert current UTC time to Saudi Arabia / Makkah time (UTC+3)
  const utcHours = now.getUTCHours();
  const utcMinutes = now.getUTCMinutes();
  const utcDay = now.getUTCDay(); // 0 is Sunday, 5 is Friday, 6 is Saturday
  
  const makkahHour = (utcHours + 3) % 24;
  const makkahMinute = utcMinutes;
  
  // Format current Makkah time in Arabic and English
  const hour12 = makkahHour % 12 === 0 ? 12 : makkahHour % 12;
  const ampmAr = makkahHour >= 12 ? 'م' : 'ص';
  const ampmEn = makkahHour >= 12 ? 'PM' : 'AM';
  const minuteFormatted = makkahMinute < 10 ? `0${makkahMinute}` : makkahMinute;
  
  const makkahTimeFormatted = `${hour12}:${minuteFormatted} ${ampmAr}`;
  
  // Calculate total minutes from midnight in Makkah
  const currentTotalMinutes = makkahHour * 60 + makkahMinute;
  
  // Morning shift: 09:00 (540 min) to 12:00 (720 min)
  const morningStart = 9 * 60;
  const morningEnd = 12 * 60;
  
  // Evening shift: 17:00 (1020 min) to 23:00 (1380 min)
  const eveningStart = 17 * 60;
  const eveningEnd = 23 * 60;
  
  // Friday is the weekend rest day in Saudi Arabia courts & primary offices
  const isFriday = utcDay === 5;
  
  let isOpen = false;
  let currentShift: 'morning' | 'evening' | 'closed' = 'closed';
  let nextShiftTimeAr = '';
  let nextShiftTimeEn = '';
  
  if (!isFriday) {
    if (currentTotalMinutes >= morningStart && currentTotalMinutes < morningEnd) {
      isOpen = true;
      currentShift = 'morning';
      nextShiftTimeAr = 'ينتهي الدوام الصباحي عند 12:00 ظهراً';
      nextShiftTimeEn = 'Morning shift closes at 12:00 PM';
    } else if (currentTotalMinutes >= eveningStart && currentTotalMinutes < eveningEnd) {
      isOpen = true;
      currentShift = 'evening';
      nextShiftTimeAr = 'ينتهي الدوام المسائي عند 11:00 مساءً';
      nextShiftTimeEn = 'Evening shift closes at 11:00 PM';
    } else if (currentTotalMinutes < morningStart) {
      nextShiftTimeAr = 'يبدأ الدوام الصباحي عند الساعة 9:00 صباحاً';
      nextShiftTimeEn = 'Morning shift starts at 9:00 AM';
    } else if (currentTotalMinutes >= morningEnd && currentTotalMinutes < eveningStart) {
      nextShiftTimeAr = 'يبدأ الدوام المسائي عند الساعة 5:00 مساءً';
      nextShiftTimeEn = 'Evening shift starts at 5:00 PM';
    } else {
      nextShiftTimeAr = 'يفتح المكتب غداً في الفترة الصباحية الساعة 9:00 ص';
      nextShiftTimeEn = 'Office opens tomorrow at 9:00 AM';
    }
  } else {
    // Friday
    nextShiftTimeAr = 'المكتب مغلق اليوم (عطلة الجمعة) - نستقبل الاستشارات غداً من 9:00 ص';
    nextShiftTimeEn = 'Friday weekend - Reopens tomorrow at 9:00 AM';
  }
  
  return {
    isOpen,
    currentShift,
    nextShiftTimeAr,
    nextShiftTimeEn,
    makkahTimeFormatted: `${hour12}:${minuteFormatted} ${ampmAr} / ${ampmEn}`
  };
}
