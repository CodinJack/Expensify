/*
  Warnings:

  - You are about to drop the column `category` on the `expenses` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `expenses` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `expenses` DROP COLUMN `category`,
    DROP COLUMN `type`;

-- CreateTable
CREATE TABLE `balance` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NULL,
    `amount` DECIMAL(10, 2) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `balance_user_id_idx`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `balance` ADD CONSTRAINT `balance_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;
