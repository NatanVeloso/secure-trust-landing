import { useEffect } from "react";
import { useTheme } from "next-themes";

/**
 * Hook que troca automaticamente o tema baseado no horário local do usuário
 * - Entre 6h e 18h: tema claro (light)
 * - Entre 18h e 6h: tema escuro (dark)
 * - Respeita a escolha manual do usuário salva no localStorage
 */
export const useAutoTheme = () => {
  const { setTheme } = useTheme();

  useEffect(() => {
    const updateThemeBasedOnTime = () => {
      // Verifica se o usuário tem uma preferência manual salva
      const hasManualPreference = localStorage.getItem("theme-manual-override");

      if (hasManualPreference === "true") {
        // Se o usuário escolheu manualmente, não faz nada
        console.log("[Auto Theme] Preferência manual detectada - mantendo tema escolhido pelo usuário");
        return;
      }

      // Obtém a hora local do usuário
      const now = new Date();
      const hour = now.getHours();

      // Define o tema baseado na hora
      // Dia: 6h às 17h59 = light
      // Noite: 18h às 5h59 = dark
      const shouldBeDark = hour >= 18 || hour < 6;
      const newTheme = shouldBeDark ? "dark" : "light";

      setTheme(newTheme);

      console.log(
        `[Auto Theme] Hora local: ${hour}h | Fuso horário: ${
          Intl.DateTimeFormat().resolvedOptions().timeZone
        } | Tema: ${newTheme}`
      );
    };

    // Atualiza o tema imediatamente
    updateThemeBasedOnTime();

    // Atualiza o tema a cada minuto para verificar mudanças
    const interval = setInterval(updateThemeBasedOnTime, 60000);

    return () => clearInterval(interval);
  }, [setTheme]);
};
