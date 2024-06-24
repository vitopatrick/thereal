import { useEffect } from "react";

export const useChatSupport = () => {
  useEffect(() => {
    const scriptId = "jivoChatWidgetScript";

    // Check if the script already exists in the document
    if (document.getElementById(scriptId)) return;

    // Create a new script element
    const script = document.createElement("script");

    // Set the script attributes
    script.id = scriptId;
    script.async = true;
    script.src = "//code.jivosite.com/widget/M6RIrVdRki";

    // Append the script to the body of the document
    document.body.appendChild(script);

    // Optionally, clean up the script when the component is unmounted
    return () => {
      const existingScript = document.getElementById(scriptId);
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);
};
