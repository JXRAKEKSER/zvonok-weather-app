function formatDate(
  date: Date,
  formatOptions: {
    locale: Intl.LocaleOptions['language'];
    options: Intl.DateTimeFormatOptions;
  }
): string {
  return date.toLocaleDateString(formatOptions.locale, formatOptions.options);
}

export { formatDate };
