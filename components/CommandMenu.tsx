"use client";

import { useEffect, useState } from "react";
import { Command } from "cmdk";
import {
  FolderKanban,
  User,
  Mail,
  Download,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export default function CommandMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };

    window.addEventListener("keydown", down);

    return () => window.removeEventListener("keydown", down);
  }, []);

  const navigate = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
    setOpen(false);
  };

  return (
    <Command.Dialog
      open={open}
      onOpenChange={setOpen}
      label="Command Menu"
      className="fixed left-1/2 top-24 z-[9999] w-[92%] max-w-xl -translate-x-1/2 overflow-hidden rounded-3xl border border-white/10 bg-[#0B1120]/95 shadow-2xl backdrop-blur-2xl"
    >
      <Command.Input
        placeholder="Search..."
        className="w-full border-b border-white/10 bg-transparent px-6 py-5 text-lg outline-none"
      />

      <Command.List className="max-h-[420px] overflow-y-auto p-3">

        <Command.Empty className="p-6 text-zinc-400">
          No results found.
        </Command.Empty>

        <Command.Group heading="Navigation">

          <Command.Item
            onSelect={() => navigate("about")}
            className="flex cursor-pointer items-center gap-3 rounded-xl px-4 py-3 data-[selected=true]:bg-blue-600"
          >
            <User size={18} />
            About
          </Command.Item>

          <Command.Item
            onSelect={() => navigate("skills")}
            className="flex cursor-pointer items-center gap-3 rounded-xl px-4 py-3 data-[selected=true]:bg-blue-600"
          >
            <FolderKanban size={18} />
            Tech Arsenal
          </Command.Item>

          <Command.Item
            onSelect={() => navigate("projects")}
            className="flex cursor-pointer items-center gap-3 rounded-xl px-4 py-3 data-[selected=true]:bg-blue-600"
          >
            <FolderKanban size={18} />
            Projects
          </Command.Item>

          <Command.Item
            onSelect={() => navigate("contact")}
            className="flex cursor-pointer items-center gap-3 rounded-xl px-4 py-3 data-[selected=true]:bg-blue-600"
          >
            <Mail size={18} />
            Contact
          </Command.Item>

        </Command.Group>

        <Command.Group heading="Links">

          <Command.Item
            onSelect={() =>
              window.open(
                "https://github.com/Ebitimiebelike",
                "_blank"
              )
            }
            className="flex cursor-pointer items-center gap-3 rounded-xl px-4 py-3 data-[selected=true]:bg-blue-600"
          >
            <FaGithub size={18} />
            GitHub
          </Command.Item>

          <Command.Item
            onSelect={() =>
              window.open(
                "https://linkedin.com/in/ebitimiebelike-23469836a",
                "_blank"
              )
            }
            className="flex cursor-pointer items-center gap-3 rounded-xl px-4 py-3 data-[selected=true]:bg-blue-600"
          >
            <FaLinkedin size={18} />
            LinkedIn
          </Command.Item>

          <Command.Item
            onSelect={() =>
              window.open("/resume.pdf", "_blank")
            }
            className="flex cursor-pointer items-center gap-3 rounded-xl px-4 py-3 data-[selected=true]:bg-blue-600"
          >
            <Download size={18} />
            Resume
          </Command.Item>

        </Command.Group>

      </Command.List>
    </Command.Dialog>
  );
}