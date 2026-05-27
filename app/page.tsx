import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const whatsappLink = "https://chat.whatsapp.com/K9O9BBjHVa37EJHi5eMgiU?mode=gi_c";

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white p-4 font-sans text-center">

      {/* Imagem do Perfil */}
      <div className="mb-8 flex h-[140px] w-[140px] shrink-0 items-center justify-center rounded-full border-[3px] border-[#1877F2] p-[4px]">
        <div className="relative h-full w-full overflow-hidden rounded-full bg-[#f9f9f9]">
          <Image
            src="/perfil-grupo.png"
            alt="Foto do Grupo"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Título */}
      <h1 className="text-[26px] md:text-[28px] font-normal text-[#111b21] mb-2 decoration-transparent">
        FÃS DA MARI FERNANDEZ ❤️
      </h1>

      {/* Subtítulo */}
      <p className="text-[17px] md:text-[18px] text-[#54656f] mb-12">
        Convite para conversa em grupo
      </p>

      {/* Container de Botão */}
      <div className="flex w-full max-w-[320px] flex-col gap-4">
        {/* Botão Primário */}
        <a
          href={whatsappLink}
          className="flex w-full items-center justify-center rounded-[40px] border border-black bg-[#25D366] py-[14px] px-6 text-[17px] font-medium text-[#111b21] no-underline transition-all hover:bg-[#20bd5a] active:scale-95"
        >
          Entre no grupo agora mesmo
        </a>
      </div>

      {/* Links de Políticas */}
      <div className="fixed bottom-6 flex gap-6 text-[14px] text-gray-400">
        <Link href="/termos" className="no-underline hover:text-gray-600">Termos</Link>
        <Link href="/privacidade" className="no-underline hover:text-gray-600">Privacidade</Link>
      </div>

    </main>
  );
}