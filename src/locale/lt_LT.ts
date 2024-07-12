import { commonLocale } from './common';
import type { Locale } from '../interface';

const locale: Locale = {
  ...commonLocale,
  locale: 'lt_LT',
  today: 'Šiandien',
  now: 'Dabar',
  backToToday: 'Rodyti šiandien',
  ok: 'Gerai',
  clear: 'Išvalyti',
  month: 'Mėnesis',
  year: 'Metai',
  timeSelect: 'Pasirinkti laiką',
  dateSelect: 'Pasirinkti datą',
  weekSelect: 'Pasirinkti savaitę',
  monthSelect: 'Pasirinkti mėnesį',
  yearSelect: 'Pasirinkti metus',
  decadeSelect: 'Pasirinkti dešimtmetį',

  dateFormat: 'YYYY-MM-DD',
  dayFormat: 'DD',
  dateTimeFormat: 'YYYY-MM-DD HH:MM:SS',

  previousMonth: 'Buvęs mėnesis (PageUp)',
  nextMonth: 'Kitas mėnesis (PageDown)',
  previousYear: 'Buvę metai (Control + left)',
  nextYear: 'Kiti metai (Control + right)',
  previousDecade: 'Buvęs dešimtmetis',
  nextDecade: 'Kitas dešimtmetis',
  previousCentury: 'Buvęs amžius',
  nextCentury: 'Kitas amžius',
};

export default locale;
