# Lúcia Lafayete — Fisioterapia e Osteopatia no Leblon

Site profissional da fisioterapeuta Lúcia Lafayete: atendimento em Fisioterapia, Osteopatia, Pilates, Ondas de Choque, Dry Needling e Recovery, no Leblon e a domicílio. O site funciona como ferramenta de aquisição de pacientes — o WhatsApp é o principal canal de conversão.

## Stack

- **Framework:** Next.js 16 (App Router) + TypeScript
- **Styling:** Tailwind CSS v4
- **Animações:** Motion (ex-Motion One)
- **SEO:** Metadata API + JSON-LD (`MedicalBusiness`)
- **Deploy:** Vercel

## Como rodar

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Scripts

| Comando       | Descrição                          |
| ------------- | ---------------------------------- |
| `npm run dev` | Servidor de desenvolvimento        |
| `npm run build` | Build de produção                |
| `npm run start` | Serve o build de produção        |
| `npm run lint`  | ESLint                            |

## Estrutura

```
app/
  layout.tsx      # Root layout, metadata e JSON-LD
  page.tsx        # Single page com todas as seções
  globals.css     # Import do Tailwind e estilos globais
public/
  images/         # Fotos da profissional, do espaço e logos
next.config.ts    # Configuração do Next.js
```

## Conteúdo editável

- Dados de contato (WhatsApp, telefone, Instagram, endereço) no topo de `app/page.tsx` e `app/layout.tsx`.
- Serviços, depoimentos e textos das seções: `app/page.tsx`.
- Metadata e JSON-LD (SEO): `app/layout.tsx`.

## Deploy

1. Ajustar dados de contato e fotos reais em `public/images/`.
2. Enviar para o repositório Git.
3. Importar na Vercel e configurar o domínio personalizado.