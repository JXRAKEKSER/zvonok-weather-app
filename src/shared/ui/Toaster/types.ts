const TOAST_TYPES = {
  INFO: "INFO",
  WARNING: "WARNING",
  ERROR: "ERROR",
} as const;

type ToastType = (typeof TOAST_TYPES)[keyof typeof TOAST_TYPES];

export { TOAST_TYPES, type ToastType };
