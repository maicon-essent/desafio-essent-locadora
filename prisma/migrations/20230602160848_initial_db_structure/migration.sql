-- CreateEnum
CREATE TYPE "Situation" AS ENUM ('REGULAR', 'ATRASADO', 'ENTREGUE');

-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "client" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "data_nascimento" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "client_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "director" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "director_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "actor" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "actor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "director_movies" (
    "id" TEXT NOT NULL,
    "id_director" TEXT NOT NULL,
    "id_movie" TEXT NOT NULL,

    CONSTRAINT "director_movies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "actor_movies" (
    "id" TEXT NOT NULL,
    "id_actor" TEXT NOT NULL,
    "id_movie" TEXT NOT NULL,

    CONSTRAINT "actor_movies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "movie" (
    "id" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "ano_lancamento" TEXT NOT NULL,
    "imagem" TEXT NOT NULL,
    "sinopse" TEXT NOT NULL,
    "elenco" TEXT NOT NULL,
    "categoria" TEXT NOT NULL,
    "valor_locacao" TEXT NOT NULL,
    "qtd_copias_disponiveis" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "movie_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "location" (
    "id" TEXT NOT NULL,
    "id_client" TEXT NOT NULL,
    "id_movie" TEXT NOT NULL,
    "data_retirada" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "data_devolucao" TIMESTAMP(3) NOT NULL,
    "hora_limite_devolucao" TEXT NOT NULL,
    "multa_atraso" TEXT NOT NULL,
    "valor_total" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "location_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- AddForeignKey
ALTER TABLE "director_movies" ADD CONSTRAINT "director_movies_id_director_fkey" FOREIGN KEY ("id_director") REFERENCES "director"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "director_movies" ADD CONSTRAINT "director_movies_id_movie_fkey" FOREIGN KEY ("id_movie") REFERENCES "movie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "actor_movies" ADD CONSTRAINT "actor_movies_id_actor_fkey" FOREIGN KEY ("id_actor") REFERENCES "actor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "actor_movies" ADD CONSTRAINT "actor_movies_id_movie_fkey" FOREIGN KEY ("id_movie") REFERENCES "movie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "location" ADD CONSTRAINT "location_id_client_fkey" FOREIGN KEY ("id_client") REFERENCES "client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "location" ADD CONSTRAINT "location_id_movie_fkey" FOREIGN KEY ("id_movie") REFERENCES "movie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
