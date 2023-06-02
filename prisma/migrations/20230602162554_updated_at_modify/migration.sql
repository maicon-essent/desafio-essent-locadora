-- AlterTable
ALTER TABLE "actor" ALTER COLUMN "updated_at" DROP DEFAULT;

-- AlterTable
ALTER TABLE "client" ALTER COLUMN "updated_at" DROP DEFAULT;

-- AlterTable
ALTER TABLE "director" ALTER COLUMN "updated_at" DROP DEFAULT;

-- AlterTable
ALTER TABLE "location" ALTER COLUMN "updated_at" DROP DEFAULT;

-- AlterTable
ALTER TABLE "movie" ALTER COLUMN "updated_at" DROP DEFAULT;

-- AlterTable
ALTER TABLE "user" ALTER COLUMN "updated_at" DROP DEFAULT;
