-- This is an empty migration.

CREATE UNIQUE INDEX "appointment_active_day_unique"
ON "Appointment" ("day")
WHERE "state" <> 'CANCELADA';

ALTER TABLE "Appointment"
ADD CONSTRAINT "appointment_service_xor_package"
CHECK (("serviceId" IS NOT NULL)::int + ("packageId" IS NOT NULL)::int = 1);