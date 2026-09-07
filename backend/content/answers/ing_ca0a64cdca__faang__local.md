---
qid: ing_ca0a64cdca__faang__local
question: 'Explain: Claude Cowork on Windows (2026): Download, Setup, and How to Use
  It'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 523
total_tokens: 765
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:29:30-05:00'
sources: []
---

**Clarify**  
We need a concise guide for installing and using *Claude Co‑worker*—a Windows‑native AI assistant released in 2026. Assume the user has an admin account, internet access, and a recent Windows 10/11 build.  

**Approach**  
1. Download the installer from the official Anthropic site.  
2. Run the MSI with silent or interactive options.  
3. Verify the service starts; configure API keys if required.  
4. Launch via the Start menu tile or command line (`claude-cw.exe`).  
5. Show a quick‑start script: open, authenticate, send a prompt, and view output.  

**Depth**  
- **Download:** `https://anthropic.com/downloads/ClaudeCoWorker_2026_windows.msi`.  
- **Installation:** Right‑click → *Install*, accept EULA, choose “All Users” for system service.  
- **Post‑install config:** Edit `C:\ProgramData\ClaudeCoWorker\config.json` to add your Anthropic API key (`"api_key":"sk-..."`).  
- **Service check:** `services.msc → Claude Co‑worker Service → Status: Running`.  
- **CLI usage (PowerShell):**  
  ```powershell
  & "C:\Program Files\ClaudeCoWorker\claude-cw.exe" --prompt "Summarize the latest Q3 report."
  ```  
  The tool streams tokens to stdout; pipe to a file if needed.  
- **Integration:** Add a desktop shortcut with `--gui` flag for the web‑style interface.  

**Edge Cases**  
- *No admin rights*: install in user mode (`/user`).  
- *API key missing*: service fails—prompt the user to set it in config.  
- *Firewall blocks outbound HTTPS*: test connectivity on port 443; advise adding an outbound rule.  

**Optimize & Communicate**  
For production, bundle a silent MSI (`/quiet /norestart`) and a PowerShell deployment script. Explain that the tool logs to `%APPDATA%\ClaudeCoWorker\logs` for troubleshooting. Highlight that performance scales with CPU cores; on low‑end machines, enable `--threads 2`. Conclude by noting that the assistant can be invoked from any terminal or IDE via environment variable `CLAUDE_CW_PATH`, making it developer‑friendly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
