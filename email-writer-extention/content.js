console.log("Email writer");

function createAIButton() {
  const button = document.createElement("div");
  button.className = "T-I J-J5-Ji aoO v7 T-I-atl L3";
  button.style.cssText = `
    margin-right: 8px;
    padding: 8px 16px;
    background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
    color: #ffffff;
    border: 1px solid #3d3d3d;
    border-radius: 8px;
    font-weight: 500;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    gap: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  `;
  
  // Add custom AI icon
  const icon = document.createElement("span");
  icon.innerHTML = `
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="#6366f1"/>
      <path d="M12 6C8.69 6 6 8.69 6 12C6 15.31 8.69 18 12 18C15.31 18 18 15.31 18 12C18 8.69 15.31 6 12 6ZM12 16C9.79 16 8 14.21 8 12C8 9.79 9.79 8 12 8C14.21 8 16 9.79 16 12C16 14.21 14.21 16 12 16Z" fill="#6366f1"/>
      <path d="M12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z" fill="#6366f1"/>
    </svg>
  `;
  icon.style.display = "flex";
  icon.style.alignItems = "center";
  
  const text = document.createElement("span");
  text.textContent = "AI Reply";
  text.style.color = "#ffffff";
  
  button.appendChild(icon);
  button.appendChild(text);
  
  // Add hover effect
  button.addEventListener("mouseover", () => {
    button.style.transform = "translateY(-1px)";
    button.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.3)";
    button.style.background = "linear-gradient(135deg, #2d2d2d 0%, #1a1a1a 100%)";
  });
  
  button.addEventListener("mouseout", () => {
    button.style.transform = "translateY(0)";
    button.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.2)";
    button.style.background = "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)";
  });
  
  button.setAttribute("role", "button");
  button.setAttribute("data-tooltip", "Generate AI Reply");
  return button;
}

function getEmailContent() {
  const selectors = [
    ".h7",
    ".a3s.aiL",
    ".gmail_quote",
    '[role="presentation"]',
  ];

  for (const selector of selectors) {
    const content = document.querySelector(selector);
    if (content) {
      return content.innerText.trim();
    }

    return "";
  }
}

function findComposeToolbar() {
  const selectors = [".btC", ".aDh", '[role="toolbar"]', ".gU.Up"];

  for (const selector of selectors) {
    const toolbar = document.querySelector(selector);
    if (toolbar) {
      return toolbar;
    }

    return null;
  }
}

function createToneForm() {
  const form = document.createElement("div");
  form.style.cssText = `
    display: flex;
    gap: 8px;
    align-items: center;
    margin-right: 8px;
    background-color: #ffffff;
    padding: 8px;
    border-radius: 12px;
    border: 1px solid #e0e0e0;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  `;

  const select = document.createElement("select");
  select.style.cssText = `
    padding: 8px 12px;
    background-color: #f8f9fa;
    color: #1a1a1a;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    font-size: 14px;
    cursor: pointer;
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg width='12' height='12' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7 10l5 5 5-5' stroke='%231a1a1a' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 12px center;
    min-width: 140px;
    transition: all 0.2s ease;
  `;

  select.addEventListener("mouseover", () => {
    select.style.borderColor = "#6366f1";
    select.style.backgroundColor = "#f0f0f0";
  });

  select.addEventListener("mouseout", () => {
    select.style.borderColor = "#e0e0e0";
    select.style.backgroundColor = "#f8f9fa";
  });

  select.innerHTML = `
    <option value="">Select a tone</option>
    <option value="professional">Professional</option>
    <option value="casual">Casual</option>
    <option value="friendly">Friendly</option>
  `;

  const generateBtn = document.createElement("button");
  generateBtn.textContent = "Generate";
  generateBtn.className = "T-I J-J5-Ji aoO v7 T-I-atl L3";
  generateBtn.style.cssText = `
    border-radius: 8px;
    transition: all 0.2s ease;
    background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
    color: white;
    border: none;
    padding: 8px 16px;
    font-weight: 500;
    cursor: pointer;
  `;

  generateBtn.addEventListener("mouseover", () => {
    if (!generateBtn.disabled) {
      generateBtn.style.transform = "translateY(-1px)";
      generateBtn.style.boxShadow = "0 4px 6px rgba(79, 70, 229, 0.2)";
    }
  });

  generateBtn.addEventListener("mouseout", () => {
    generateBtn.style.transform = "translateY(0)";
    generateBtn.style.boxShadow = "none";
  });

  generateBtn.addEventListener("click", async () => {
    try {
      generateBtn.textContent = "Generating...";
      generateBtn.disabled = true;
      generateBtn.style.opacity = "0.7";
      generateBtn.style.cursor = "not-allowed";
      generateBtn.style.background = "linear-gradient(135deg, #818cf8 0%, #6366f1 100%)";

      const emailContent = getEmailContent();
      const response = await fetch("http://localhost:8080/api/email/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          emailContent: emailContent,
          tone: select.value || "professional",
        }),
      });

      if (!response.ok) {
        throw new Error("API Request Failed");
      }

      const generatedReply = await response.text();
      const composeBox = document.querySelector(
        '[role="textbox"],[g_editable="true"]'
      );

      if (composeBox) {
        composeBox.focus();
        document.execCommand("insertText", false, generatedReply);
      } else {
        console.error("Compose Box was not found");
      }
    } catch (error) {
      console.error(error);
      alert("Failed to generate the reply");
    } finally {
      generateBtn.textContent = "Generate";
      generateBtn.disabled = false;
      generateBtn.style.opacity = "1";
      generateBtn.style.cursor = "pointer";
      generateBtn.style.background = "linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)";
      form.remove();
      injectButton();
    }
  });

  form.appendChild(select);
  form.appendChild(generateBtn);
  return form;
}

function injectButton() {
  const existingButton = document.querySelector(".ai-reply-button");
  if (existingButton) existingButton.remove();

  const existingForm = document.querySelector(".ai-tone-form");
  if (existingForm) existingForm.remove();

  const toolbar = findComposeToolbar();
  if (!toolbar) {
    console.log("Toolbar not Found");
    return;
  }

  console.log("Toolbar Found, create AI Button");
  const button = createAIButton();
  button.classList.add("ai-reply-button");

  button.addEventListener("click", () => {
    button.remove();
    const form = createToneForm();
    form.classList.add("ai-tone-form");
    toolbar.insertBefore(form, toolbar.firstChild);
  });

  toolbar.insertBefore(button, toolbar.firstChild);
}


const observer = new MutationObserver((mutations) => {
  for (const mutation of mutations) {
    const addedNodes = Array.from(mutation.addedNodes);
    const hasComposeElements = addedNodes.some(
      (node) =>
        node.nodeType === Node.ELEMENT_NODE &&
        (node.matches('.aDHH, .btC, [role="dialog"]') ||
          node.querySelector('.aDHH, .btC, [role="dialog"]'))
    );

    if (hasComposeElements) {
      console.log("compose window detected");
      setTimeout(injectButton, 500);
    }
  }
});

observer.observe(document.body, {
  childList: true,
  subtree: true,
});
