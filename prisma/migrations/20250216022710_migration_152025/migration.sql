/*
  Warnings:

  - A unique constraint covering the columns `[IdPermiso,idOrganiazcion]` on the table `Permisos` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[NomUsuario]` on the table `Usuario` will be added. If there are existing duplicate values, this will fail.

*/
BEGIN TRY

BEGIN TRAN;

-- CreateIndex
ALTER TABLE [dbo].[Permisos] ADD CONSTRAINT [Permisos_IdPermiso_idOrganiazcion_key] UNIQUE NONCLUSTERED ([IdPermiso], [idOrganiazcion]);

-- CreateIndex
ALTER TABLE [dbo].[Usuario] ADD CONSTRAINT [Usuario_NomUsuario_key] UNIQUE NONCLUSTERED ([NomUsuario]);

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
