export enum Subjects {
  ProductCreated = "product:created",
  ProductUpdated = "product:updated",
  ProductDeleted = "product:deleted",
  // Customer Subjects
  CustomerCreated = "customer:created",
  CustomerUpdated = "customer:updated",
  CustomerDeleted = "customer:deleted",
  // Notification Subjects
  NotificationCreated = "notification:created",
  NotificationUpdated = "notification:updated",
  NotificationDeleted = "notification:deleted",
  NotifyUserIsVerified = "notify:user:is:verified",
  // Derived
  EmailLinkResendRequest = "email:link:resend:request",
  // Robot Subjects
  RobotCreated = "robot:created",
  RobotUpdated = "robot:updated",
  RobotDeleted = "robot:deleted",
  RobotAssigned = "robot:assigned",
  RobotGetCandidate = "robot:get:candidate",
  RobotUnassigned = "robot:unassigned",
  // Taks Subjects
  TaskCreated = "task:created",
  TaskUpdated = "task:updated",
  TaskDeleted = "task:deleted",
  TaskProposal = "task:proposal",
  TaskAccepted = "task:accepted",
  TaskExhausted = "task:exhausted",
  // User Subjects
  UserCreated = "user:created",
  UserUpdated = "user:updated",
  UserDeleted = "user:deleted",
  UserPasswordForgotten = "user:password:forgotten",
  UserPasswordReset = "user:password:reset",
  UserUpgraded = "user:upgraded",
  UserLogout = "user:logout",
  UserLogin = "user:login",
  UserStatus = "user:status",
  // Zone Subjects
  ZoneCreated = "zone:created",
  ZoneUpdated = "zone:updated",
  ZoneDeleted = "zone:deleted",
  // Vendor Subjects
  VendorCreated = "vendor:created",
  VendorUpdated = "vendor:updated",
  VendorDeleted = "vendor:deleted",
  // Category Subjects
  CategoryCreated = "category:created",
  CategoryUpdated = "category:updated",
  CategoryDeleted = "category:deleted",
  // Simulation Subjects
  SimulationCreated = "simulation:created",
  SimulationUpdated = "simulation:updated",
  SimulationDeleted = "simulation:deleted",
  // Operators Subjects
  OperatorCreated = "operator:created",
  OperatorUpdated = "operator:updated",
  OperatorDeleted = "operator:deleted",
  OperatorAssigned = "operator:assigned",
  OperatorGetCandidate = "operator:get:candidate",
  OperatorUnassigned = "operator:unassigned",
  // FCM Tokens
  RobotFcmTokenUpdated = "robot:fcmToken:updated",
  UserFCMTokenUpdated = "user:fcmToken:updated",
}
