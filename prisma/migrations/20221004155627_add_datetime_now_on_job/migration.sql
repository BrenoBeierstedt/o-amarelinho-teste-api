-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_job" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "cityName" TEXT NOT NULL,
    "stateName" TEXT NOT NULL,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_job" ("cityName", "companyName", "createdAt", "description", "id", "stateName", "title", "updatedAt") SELECT "cityName", "companyName", "createdAt", "description", "id", "stateName", "title", "updatedAt" FROM "job";
DROP TABLE "job";
ALTER TABLE "new_job" RENAME TO "job";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
