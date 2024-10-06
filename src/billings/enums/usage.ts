/**
 * UsageStatus enum
 *
 * Represents the status of a usage record.
 */
export enum UsageStatus {
  Billed = "billed",
  Waiting = "waiting",
  Cancelled = "cancelled",
  Failed = "failed",
  FreeQuota = "free-quota",
}

export enum UsageType {
  Recurring = "recurring",
  OneTime = "one-time",
}
