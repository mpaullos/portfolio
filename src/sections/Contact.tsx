import { Mail, Linkedin, Send, MessageCircle } from "lucide-react";

export default function Contact() {
  const contacts = [
    {
      name: "Email",
      icon: <Mail size={28} />,
      link: "mailto:marcos.paullo32@gmail.com",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={28} />,
      link: "https://www.linkedin.com/in/mpaullos/",
    },
    {
      name: "Telegram",
      icon: <Send size={28} />,
      link: "https://t.me/soaresmp",
    },
    {
      name: "Discord",
      icon: <MessageCircle size={28} />,
      link: "https://discordapp.com/users/xmpss",
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 bg-[#85EEAB] border-t-4 border-black text-black"
    >
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-16 text-center">
          <h2 className="text-5xl font-black tracking-tight">
            Vamos{" "}
            <span className="underline decoration-4 decoration-black">
              Conversar
            </span>
          </h2>
          <p className="mt-4 font-medium">
            Me encontre nas plataformas abaixo.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {contacts.map((item) => (
            <a
              key={item.name}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                bg-white
                border-4 border-black
                p-8
                flex items-center justify-between
                shadow-[8px_8px_0_#000]
                hover:-translate-y-1
                hover:translate-x-1
                hover:shadow-[12px_12px_0_#000]
                transition-all duration-200
              "
            >
              <div className="flex items-center gap-4">
                {item.icon}
                <span className="text-xl font-black uppercase">
                  {item.name}
                </span>
              </div>

              <span className="font-mono text-sm">→</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
