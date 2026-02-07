<a name="readme-top"></a>

<h2 align="center">
    <a href="https://www.eburon.ai/?utm_source=eburon_repo&utm_medium=github&utm_campaign=readme"> <img width="50%" src="web/public/logo.png" alt="Eburon Coder Logo" /></a>
</h2>

<p align="center">Open Source AI Coding Platform</p>

<p align="center">
    <a href="https://docs.eburon.ai/?utm_source=eburon_repo&utm_medium=github&utm_campaign=readme" target="_blank">
        <img src="https://img.shields.io/badge/docs-view-blue" alt="Documentation" />
    </a>
    <a href="https://www.eburon.ai/?utm_source=eburon_repo&utm_medium=github&utm_campaign=readme" target="_blank">
        <img src="https://img.shields.io/website?url=https://www.eburon.ai&up_message=visit&up_color=blue" alt="Website" />
    </a>
    <a href="https://github.com/onyx-dot-app/onyx/blob/main/LICENSE" target="_blank">
        <img src="https://img.shields.io/static/v1?label=license&message=MIT&color=blue" alt="License" />
    </a>
</p>

**[Eburon Coder](https://www.eburon.ai/?utm_source=eburon_repo&utm_medium=github&utm_campaign=readme)** is a feature-rich, self-hostable Chat UI that works with any LLM. It is easy to deploy and can run in a completely airgapped environment.

Eburon Coder comes loaded with advanced features like Agents, Web Search, RAG, MCP, Deep Research, Connectors to 40+ knowledge sources, and more.

> [!TIP]
> Run Eburon Coder with one command (or see deployment section below):
> ```
> curl -fsSL https://raw.githubusercontent.com/onyx-dot-app/onyx/main/deployment/docker_compose/install.sh > install.sh && chmod +x install.sh && ./install.sh
> ```

****

## ⭐ Features
- **🤖 Custom Agents:** Build AI Agents with unique instructions, knowledge and actions.
- **🌍 Web Search:** Browse the web with Google PSE, Exa, and Serper as well as an in-house scraper or Firecrawl.
- **🔍 RAG:** Best in class hybrid-search + knowledge graph for uploaded files and ingested documents from connectors.
- **🔄 Connectors:** Pull knowledge, metadata, and access information from over 40 applications.
- **🔬 Deep Research:** Get in depth answers with an agentic multi-step search.
- **▶️ Actions & MCP:** Give AI Agents the ability to interact with external systems.
- **💻 Code Interpreter:** Execute code to analyze data, render graphs and create files.
- **🎨 Image Generation:** Generate images based on user prompts.
- **👥 Collaboration:** Chat sharing, feedback gathering, user management, usage analytics, and more.

Eburon Coder works with all LLMs (like OpenAI, Anthropic, Gemini, etc.) and self-hosted LLMs (like Ollama, vLLM, etc.)

To learn more about the features, check out our [documentation](https://docs.eburon.ai/welcome?utm_source=eburon_repo&utm_medium=github&utm_campaign=readme)!

## 🚀 Deployment
Eburon Coder supports deployments in Docker, Kubernetes, Terraform, along with guides for major cloud providers.

See guides below:
- [Docker](https://docs.eburon.ai/deployment/local/docker?utm_source=eburon_repo&utm_medium=github&utm_campaign=readme) or [Quickstart](https://docs.eburon.ai/deployment/getting_started/quickstart?utm_source=eburon_repo&utm_medium=github&utm_campaign=readme) (best for most users)
- [Kubernetes](https://docs.eburon.ai/deployment/local/kubernetes?utm_source=eburon_repo&utm_medium=github&utm_campaign=readme) (best for large teams)
- [Terraform](https://docs.eburon.ai/deployment/local/terraform?utm_source=eburon_repo&utm_medium=github&utm_campaign=readme) (best for teams already using Terraform)
- Cloud specific guides (best if specifically using [AWS EKS](https://docs.eburon.ai/deployment/cloud/aws/eks?utm_source=eburon_repo&utm_medium=github&utm_campaign=readme), [Azure VMs](https://docs.eburon.ai/deployment/cloud/azure?utm_source=eburon_repo&utm_medium=github&utm_campaign=readme), etc.)

> [!TIP]
> **To try Eburon Coder for free without deploying, check out [Eburon Cloud](https://cloud.eburon.ai/signup?utm_source=eburon_repo&utm_medium=github&utm_campaign=readme)**.

## 🔍 Other Notable Benefits
Eburon Coder is built for teams of all sizes, from individual users to the largest global enterprises.

- **Enterprise Search**: far more than simple RAG, Eburon Coder has custom indexing and retrieval that remains performant and accurate for scales of up to tens of millions of documents.
- **Security**: SSO (OIDC/SAML/OAuth2), RBAC, encryption of credentials, etc.
- **Management UI**: different user roles such as basic, curator, and admin.
- **Document Permissioning**: mirrors user access from external apps for RAG use cases.

## 🚧 Roadmap
To see ongoing and upcoming projects, check out our [roadmap](https://github.com/orgs/onyx-dot-app/projects/2)!

## 📚 Licensing
There are two editions of Eburon Coder:

- Eburon Coder Community Edition (CE) is available freely under the MIT license.
- Eburon Coder Enterprise Edition (EE) includes extra features that are primarily useful for larger organizations.
For feature details, check out [our website](https://www.eburon.ai/pricing?utm_source=eburon_repo&utm_medium=github&utm_campaign=readme).

## 💡 Contributing
Looking to contribute? Please check out the [Contribution Guide](CONTRIBUTING.md) for more details.
