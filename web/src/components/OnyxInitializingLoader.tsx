"use client";

import { useContext, useEffect, useState } from "react";
import Logo from "@/refresh-components/Logo";
import { SettingsContext } from "@/providers/SettingsProvider";

export default function OnyxInitializingLoader() {
  const settings = useContext(SettingsContext);

  return (
    <div className="mx-auto my-auto animate-pulse flex flex-col items-center gap-4">
      <Logo folded size={96} className="mx-auto mb-3" />
      <p className="text-lg text-text font-semibold">
        Initializing {settings?.enterpriseSettings?.application_name ?? "Eburon Coder"}
      </p>
      <OllamaDetector />
    </div>
  );
}

function OllamaDetector() {
  const [ollamaStatus, setOllamaStatus] = useState<"checking" | "found" | "not_found" | "error">("checking");

  useEffect(() => {
    const checkOllama = async () => {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 2000);

        // Try to reach local Ollama
        const response = await fetch("http://localhost:11434/api/tags", {
          method: "GET",
          signal: controller.signal,
        });

        clearTimeout(timeoutId);

        if (response.ok) {
          setOllamaStatus("found");
          // Here we could potentially call a backend API to configure the provider
          // if the backend was reachable from localhost.
          // Since it's remote, we just notify.
        } else {
          setOllamaStatus("not_found");
        }
      } catch (error) {
        console.log("Ollama detection failed (likely CORS or not running):", error);
        setOllamaStatus("error");
      }
    };

    checkOllama();
  }, []);

  if (ollamaStatus === "found") {
    return (
      <div className="text-sm text-green-500 bg-green-500/10 px-3 py-1 rounded-full border border-green-500/20">
        Local Ollama Detected
      </div>
    );
  }

  if (ollamaStatus === "checking") {
    return <div className="text-xs text-text-subtle">Checking for local models...</div>;
  }

  return null;
}
