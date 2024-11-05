/*
  Warnings:

  - Changed the type of `fullName` on the `Member` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Member" DROP COLUMN "fullName",
ADD COLUMN     "fullName" INTEGER NOT NULL;
