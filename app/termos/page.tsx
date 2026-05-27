import Link from "next/link";

export default function Termos() {
  return (
    <main className="min-h-screen bg-[#f0f2f5] p-6 font-sans flex justify-center">
      <div className="w-full max-w-2xl bg-white p-8 rounded-3xl shadow-sm border border-gray-100 mt-10 h-fit">
        <h1 className="text-2xl font-bold text-[#111b21] mb-6">Termos de Uso</h1>
        
        <div className="space-y-4 text-sm text-[#667781] leading-relaxed">
          <p><strong>1. Objetivo da Página</strong></p>
          <p>Esta página atua exclusivamente como uma ponte (pre-lander) para direcionar usuários interessados aos nossos grupos oficiais no WhatsApp.</p>

          <p><strong>2. Plataformas de Terceiros</strong></p>
          <p>Ao clicar no botão de acesso, você será redirecionado para o aplicativo WhatsApp, que é operado pela Meta Platforms, Inc. Não temos controle sobre o funcionamento, estabilidade ou termos de uso do WhatsApp. O uso do aplicativo de mensagens está sujeito às próprias políticas da Meta.</p>

          <p><strong>3. Isenção de Responsabilidade</strong></p>
          <p>Não nos responsabilizamos por instabilidades no link de convite ou no próprio aplicativo do WhatsApp que impeçam o acesso temporário ao grupo.</p>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-100">
          <Link href="/" className="text-[#25D366] font-semibold hover:underline">
            &larr; Voltar para o início
          </Link>
        </div>
      </div>
    </main>
  );
}