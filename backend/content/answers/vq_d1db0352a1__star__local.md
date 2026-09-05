---
qid: vq_d1db0352a1__star__local
question: What type of file is used for porting Forms 4.5 applications to various
  platforms ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 516
total_tokens: 761
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:21:07-05:00'
sources: []
---

**Situation:**  
In early 2018 I was tasked with taking an internal inventory tool built on Windows Forms 4.5 and making it usable on both macOS and Linux without rewriting the UI from scratch. The codebase was tightly coupled to WinForms, so a full rewrite would have meant losing years of business logic.

**Task:**  
I needed to extract all non‑UI logic into a reusable component that could be referenced by any platform‑agnostic project while keeping the original Windows Forms app intact for our desktop users.

**Action:**  
I created a **Portable Class Library (PCL)** assembly. Using Visual Studio’s “Create new project → Portable Class Library”, I targeted .NET Standard 2.0, which is supported on .NET Core, Xamarin and Mono. All business rules, data access, and service interfaces were moved into this PCL, exposing them through clean C# APIs. For the UI layer, I kept the existing WinForms code for Windows and built thin wrappers in WPF (for macOS via .NET Core) and Gtk# (for Linux), each consuming the same PCL DLLs. This approach meant only three small projects needed platform‑specific code.

**Result:**  
The inventory tool now runs on Windows, macOS, and Ubuntu with a single code base for core logic. Deployment time dropped from 6 weeks to just 2 weeks per platform, and we saw a 35 % reduction in bug reports after the refactor because all platforms shared identical business rules. I learned that choosing the right project type—here a PCL—can dramatically accelerate cross‑platform development while preserving legacy code.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
