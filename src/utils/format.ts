export const formatYearMonth = (value: string): string => {
  if (!value || value.toLowerCase() === 'present') return 'Present';
  return value;
};

export const formatRange = (start: string, end: string): string =>
  `${formatYearMonth(start)} — ${formatYearMonth(end)}`;
