---
qid: ing_0188230c67__faang__local
question: 'How does Spring Boot work? — GitHub - Anshul619/SpringBoot: About This
  repo contains java \"how to to-dos\", concepts in Spring Boot \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 263
output_tokens: 565
total_tokens: 828
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:47:36-05:00'
sources: []
---

**Clarify**  
You’re asking how a Spring Boot application starts up and runs. I’ll assume we want an overview of the boot‑strap process (no custom extensions) and that the reader knows Java basics.

**Approach**  
1. Entry point (`public static void main`) → `SpringApplication.run`.  
2. SpringApplication builds a `ConfigurableApplicationContext`.  
3. Auto‑configuration, component scanning, bean creation, and servlet container setup.  
4. Application finishes startup, then request handling begins.

**Depth**  

| Step | What happens | Key classes |
|------|--------------|-------------|
| **1. main()** | Calls `SpringApplication.run(MyApp.class, args)`. | `SpringApplication` |
| **2. Context creation** | Creates a `ConfigurableEnvironment`, loads properties (`application.yml/.properties`). | `StandardEnvironment`, `PropertySourcesPlaceholderConfigurer` |
| **3. Auto‑configuration** | Uses `@EnableAutoConfiguration` → scans `META-INF/spring.factories` for classes annotated with `@ConditionalOn…`. Instantiates beans like `DataSource`, `WebMvcAutoConfiguration`. | `AutoConfigurationImportSelector` |
| **4. Component scanning** | Looks at `@ComponentScan` (default: package of main class). Detects `@Component`, `@Service`, `@Repository`, `@Controller`. | `ClassPathScanningCandidateComponentProvider` |
| **5. Bean instantiation & wiring** | Builds the bean graph, resolves dependencies via constructor/setter injection, processes `@PostConstruct`. | `DefaultListableBeanFactory` |
| **6. Servlet container startup** (web app) | Detects embedded Tomcat/Jetty/Undertow, registers DispatcherServlet, maps `/` to it. | `EmbeddedWebApplicationContext`, `DispatcherServletRegistrationBean` |
| **7. Ready** | Context is refreshed; application logs “Started … in X ms”. | `SpringBootConfiguration` |

**Edge cases**  
- Missing `@SpringBootApplication`: no auto‑config.  
- Conflicting bean definitions → `NoUniqueBeanDefinitionException`.  
- Property resolution failures (e.g., missing DB credentials).  

**Optimize & communicate**  
Explain that Spring Boot trades explicit XML config for convention‑over‑configuration, drastically reducing boilerplate. Mention that you can override defaults via custom `@Configuration` classes or property files, and that profiling startup time is done with Actuator’s `/actuator/metrics/spring.application.startup.time`. Keep the explanation concise yet detailed enough to satisfy a FAANG interviewer’s focus on structure and depth.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
