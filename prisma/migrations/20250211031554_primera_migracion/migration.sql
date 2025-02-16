BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[Usuario] (
    [IdUsuario] INT NOT NULL IDENTITY(1,1),
    [Nombre] NVARCHAR(1000) NOT NULL,
    [APaterno] NVARCHAR(1000) NOT NULL,
    [AMaterno] NVARCHAR(1000) NOT NULL,
    [RFC] NVARCHAR(1000) NOT NULL,
    [NomUsuario] NVARCHAR(1000) NOT NULL,
    [Contraseña] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [Usuario_pkey] PRIMARY KEY CLUSTERED ([IdUsuario])
);

-- CreateTable
CREATE TABLE [dbo].[Organizacion] (
    [IdOrganzacion] INT NOT NULL IDENTITY(1,1),
    [Nombre] NVARCHAR(1000) NOT NULL,
    [RFC] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [Organizacion_pkey] PRIMARY KEY CLUSTERED ([IdOrganzacion])
);

-- CreateTable
CREATE TABLE [dbo].[Permisos] (
    [IdPermiso] INT NOT NULL IDENTITY(1,1),
    [EscrituraLectura] INT NOT NULL,
    [Lectura] INT NOT NULL,
    [IdUsuario] INT NOT NULL,
    [idOrganiazcion] INT NOT NULL,
    CONSTRAINT [Permisos_pkey] PRIMARY KEY CLUSTERED ([IdPermiso])
);

-- AddForeignKey
ALTER TABLE [dbo].[Permisos] ADD CONSTRAINT [Permisos_idOrganiazcion_fkey] FOREIGN KEY ([idOrganiazcion]) REFERENCES [dbo].[Organizacion]([IdOrganzacion]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[Permisos] ADD CONSTRAINT [Permisos_IdUsuario_fkey] FOREIGN KEY ([IdUsuario]) REFERENCES [dbo].[Usuario]([IdUsuario]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
