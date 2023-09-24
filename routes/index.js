var express = require('express');
var router = express.Router();

const itemList = [
  { 'id': 1, 'Term': 'DevOps', 'Description': 'DevOps defines a development and operations, enabling automated development and continuous feature deliveries through collaboration, faster value delivery, and problem resolution. Tailored DevOps approaches can facilitate quick and reliable upgrades, even in constrained environments like safety-critical and embedded systems.', 'Refrences': 'Ebert, C., Gallardo, G., Hernantes, J. and Serrano, N., 2016. DevOps. Ieee Software, 33(3), pp.94-100.' },
  { 'id': 2, 'Term': 'Continuous Integration', 'Description': 'In DevOps, It defines a method where code updates are routinely merged into a main repository and tested automatically, promoting frequent collaboration and a consistent codebase.', 'Refrences': 'Ishan, G. (2023), What is Continuous Integration and Why it is Important?,Simplilearn, accessed 21 July 2023. https://www.simplilearn.com/tutorials/devops-tutorial/continuous-integration ' },
  { 'id': 3, 'Term': 'Continuous delivery', 'Description': 'Continuous Delivery extends Continuous Integration by automating code deployment to testing or production environments, allowing one-click application deployment at any preferred frequency. Early production deployment is essential to leverage its benefits, ensuring smaller releases for easier issue troubleshooting.', 'Refrences': 'Sten, P. (n.d.). Continuous integration vs. delivery vs. deployment, ATLASSIAN, accessed 21 July 2023 https://www.atlassian.com/continuous-delivery/principles/continuous-integration-vs-delivery-vs-deployment' },
  { 'id': 4, 'Term': 'Continuous deployment', 'Description': 'Continuous Deployment defines an automated software development strategy where code changes are automatically released to production after passing predefined tests. It speeds up time-to-market by eliminating delays and the need for manual regression testing and approval meetings for most changes.', 'Refrences': 'IBM.(n.d.).What is continuous deployment?, IBM, accessed 21 July 2023.' },
  { 'id': 5, 'Term': 'NoOps', 'Description': 'NoOps is a concept where IT environments are highly automated, eliminating the need for dedicated teams to manage software. It leverages cloud solutions to provide resources on demand, enabling faster application deployment and a more business-oriented focus for developers.', 'Refrences': 'Rahul, Aeati. (2021). NoOps (no operations). TechTarget, accessed 21 July 2023. https://www.techtarget.com/searchitoperations/definition/NoOps' },
  { 'id': 6, 'Term': 'BDD & TDD', 'Description': 'It defines a testing methods. Test-Driven Development (TDD) is a testing methodology where a QA engineer writes test cases for each small functionality to validate code from a developers perspective. Behavioral-Driven Development (BDD) is derived from TDD and focuses on testing system behavior with different feature development approaches. BDD commonly uses the Given-When-Then approach for writing test cases.', 'Refrences': 'Jash, U. (2023).TDD vs BDD vs ATDD : Key Differences. BrowersStack, accessed 21 July 2023. https://www.browserstack.com/guide/tdd-vs-bdd-vs-atdd#:~:text=TDD%20is%20a%20development%20technique,more%20on%20capturing%20the%20requirements' },
  { 'id': 7, 'Term': 'Agile', 'Description': 'It is a software development approach that emphasises rapid delivery through enhanced collaboration between the client and development team.It can ensure that the developed software meets the business and functional requirements.', 'Refrences': 'Gursimran, S. (2023). Role of Agile in DevOps-why it Matters?. XENONSTACK, accessed 21 July 2023. https://www.xenonstack.com/insights/role-of-agile-in-devops/#:~:text=Introduction%20to%20Agile%20in%20DevOps,-Every%20IT%20company&text=It%20is%20a%20methodology%20used,client%20and%20the%20development%20team.' },
  { 'id': 8, 'Term': 'key performance indicators', 'Description': 'KPIs are measurable metrics used to track progress towards goals, guiding data-driven decisions for performance optimization. They help organizations identify strengths, weaknesses, and take actions to improve overall performance.', 'Refrences': 'Klipfolio. (n.d.). What is a Key Performance Indicator (KPI)?, Klipfolio,accessed 21 July 2023. https://www.klipfolio.com/resources/articles/what-is-a-key-performance-indicator' },
  { 'id': 9, 'Term': 'Service-Level Agreements', 'Description': 'It defines a contract that stipulates the expected standards of service from a provider. It outlines key metrics, expectations, and consequences for non-compliance.', 'Refrences': 'Andrey, p. (2017). What is an SLA? Best practices for service-level agreements.CIO, accessed 21 July 2023. https://www.cio.com/article/274740/outsourcing-sla-definitions-and-solutions.html ' },
  { 'id': 10, 'Term': 'Infrastructure as code', 'Description': 'Infrastructure as Code (IaC) manages infrastructure through code, enabling easy configuration editing and consistency, while promoting documentation and avoiding ad hoc changes. Examples include AWS CloudFormation, Ansible, Chef, Puppet, SaltStack, and Terraform.', 'Refrences': 'Morris, K. 2020. Infrastructure as code. OReilly Media.' },
  { 'id': 11, 'Term': 'The definition of done (DoD)', 'Description': 'DoD (Definition of Done) refers to the state when all conditions and acceptance criteria are met, and the product is ready to be accepted by users, customers, and the team.', 'Refrences': 'ProductPlan.(n.d.).The Definition of Done: What Product Managers Need to Know. prodctPlan, accessed 4 Aug 2023.https://www.productplan.com/learn/agile-definition-of-done/#:~:text=%E2%80%9CThe%20definition%20of%20done%20(DoD,of%20done%20to%20ensure%20quality.' },
  { 'id': 12, 'Term': 'root cause analysis (RCA)', 'Description': 'Root Cause Analysis (RCA) is the process of identifying the fundamental reasons for a problem to determine appropriate solutions.', 'Refrences': 'Tableau.(n.d.).Root Cause Analysis Explained: Definition, Examples, and Methods.Tebleau, accessed 4 Aug 2023.https://www.tableau.com/learn/articles/root-cause-analysis#definition ' },
  { 'id': 13, 'Term': 'IT Infrastructure Library (ITIL)', 'Description': 'ITIL is a comprehensive IT service management framework that guides businesses in delivering IT services effectively. It aids in risk management, improving customer relationships, and establishing a stable and efficient IT environment that facilitates growth and adaptability.', 'Refrences': 'White, S. K., & Greiner, L. (2022). What is ITIL? Your guide to the IT Infrastructure Library.CIO.accessed 4 Aug 2023.https://www.cio.com/article/272361/infrastructure-it-infrastructure-library-itil-definition-and-solutions.html' },
  { 'id': 14, 'Term': 'DevSecOps', 'Description': 'DevOps is a collaborative and automated approach between development and operations teams. DevSecOps extends this by integrating security practices into each stage of the software development lifecycle to ensure software security and compliance.', 'Refrences': 'jamasoftware.(n.d.).Follow a manual added link The Essential Guide to Requirements Management and Traceability.Jama software. accessed 4 Aug 2023.https://www.jamasoftware.com/requirements-management-guide' },
  { 'id': 15, 'Term': 'Definition of Ready (DoR)', 'Description': 'A Definition of Ready (DoR) outlines the necessary criteria for an item to be ready for implementation work. It specifies the requirements that must be met before work can begin on the item in the intake process.', 'Refrences': 'Nick, B.(2022). Definition of ready and definition of done: Whats the difference?.BOOST.accessed 4 Aug 2023.https://www.boost.co.nz/blog/2022/06/definition-ready-definition-done' },
  { 'id': 16, 'Term': 'User Experience (UX)', 'Description': 'User Experience (UX) is how individuals perceive and interact with a system, such as websites or applications. UX designers study usability, value perception, efficiency, and practicality to enhance the overall user experience.', 'Refrences': 'Jacob, G.(2010).What Is User Experience Design? Overview, Tools And Resources.accessed 4 Aug 2023. https://www.smashingmagazine.com/2010/10/what-is-user-experience-design-overview-tools-and-resources/' },
  { 'id': 17, 'Term': 'Configuration as Code (CaC)', 'Description': 'Config as Code (CaC) separates configuration from the application code, storing application settings in a separate repository and managing them independently. This allows for more flexibility and ease of configuration management.', 'Refrences': 'Adam, B. (2021).Config as Code: What is it and how is it beneficial?.Octopus Deploy.accessed 4 Aug 2023.https://octopus.com/blog/config-as-code-what-is-it-how-is-it-beneficial ' },
  { 'id': 18, 'Term': 'Desired State Configuration (DSC)', 'Description': 'DSC (Desired State Configuration) is a command-line tool that empowers administrators to utilize a PowerShell-based scripting language for configuring Windows and/or Linux systems. It automates the configuration of multiple computers, ensuring uniform settings across them.', 'Refrences': 'Brien, P.(n.d.).Microsoft Windows PowerShell DSC (Desired State Configuration).TechTarget,accessed 4 Aug 2023.https://www.techtarget.com/searchwindowsserver/definition/Microsoft-Windows-PowerShell-DSC-Desired-State-Configuration#:~:text=DSC%20can%20be%20used%20to,referred%20to%20as%20push%20mode. ' },
  { 'id': 19, 'Term': 'Site Reliability Engineering (SRE)', 'Description': 'Site Reliability Engineering (SRE) is an IT operations approach that relies on software engineering principles, using automation and software tools to manage production systems and resolve issues. It replaces manual tasks typically performed by operations teams with automated solutions.', 'Refrences': 'RedHat.(2020).What is SRE (site reliability engineering)?.RedHat.accessed 4 Aug 2023.https://www.redhat.com/en/topics/devops/what-is-sre' },
  { 'id': 20, 'Term': 'Architecture Development Method (ADM)', 'Description': 'The Architecture Development Method (ADM) is the central process within TOGAF that enables the development of enterprise architecture to address the business and IT needs of an organization. It offers a structured approach for managing the enterprise architecture lifecycle, allowing for customization based on organizational requirements and facilitating architecture planning activities.', 'Refrences': 'vpadmin,(2020).Introduction to TOGAF Architecture Development Method (ADM).Cybermedian,accessed 4 Aug 2023.https://www.cybermedian.com/introduction-to-togaf-architecture-development-method-adm/' },
  { 'id': 21, 'Term': 'Framework Class Library (FCL)', 'Description': 'The Framework Class Library (FCL) provides system functionality in the .NET Framework. It includes the classes, interfaces, and data types contained within the .NET Framework, which are used to access system functionalities. The .NET FCL forms the foundation for building applications, controls, and components in .NET.', 'Refrences': 'Rouse, AP by M (2011), What is Framework Class Library (FCL)? - Definition from Techopedia,accessed 21 Aug 2023. https://www.techopedia.com/definition/24212/framework-class-library-fcl-net.' },
  { 'id': 22, 'Term': 'principle of least privilege(POLP)', 'Description': 'The Principle of Least Privilege (PoLP) is an information security concept. It involves providing users with the minimal level of access or permissions needed to perform their job functions.', 'Refrences': 'CyberArk Software (2023), What is Least Privilege? Principle of Least Privilege Definition,accessed 21 Aug 2023. https://www.cyberark.com/what-is/least-privilege/.' },
  { 'id': 23, 'Term': 'configuration management database (CMDB)', 'Description': 'A CMDB is a document that contains relevant information about the hardware and software used within an IT project by a team. As IT infrastructure becomes increasingly complex, a CMDB can be utilized to identify, validate, and enhance each component of the infrastructure.', 'Refrences': 'Montgomery, J & Mixon, E (2020), “CMDB (configuration management database),” Data Center,accessed 21 Aug 2023. https://www.techtarget.com/searchdatacenter/definition/configuration-management-database.' },
  { 'id': 24, 'Term': 'big-bang approach', 'Description': 'The "big-bang approach" is a software testing method. When individual components cannot be tested separately, the entire system is tested as a whole.', 'Refrences': 'Prepinsta Technologies Private Limited (2023), Big Bang Approach | PrepInsta,accessed 21 Aug 2023. https://prepinsta.com/software-engineering/big-bang-approach/#:~:text=Processes%20in%20Big%20Bang%20Approach,components%20of%20the%20system%20separately.' },
  { 'id': 25, 'Term': 'business continuity plan (BCP)', 'Description': 'BCP (Business Continuity Planning) is a set of strategies and systems that provide detailed guidelines on how to ensure an organizations ability to swiftly recover from incidents or disruptions occurring during operations. This ensures that the organization can maintain its day-to-day business in any disaster scenario.', 'Refrences': 'VMware Glossary 2021.(2021) What is a Business Continuity Plan (BCP)?. VMware Glossary 2021,accessed 21 Aug 2023.https://www.vmware.com/topics/glossary/content/business-continuity-plan.html#:~:text=A%20Business%20Continuity%20Plan%20(BCP)%20is%20a%20detailed%20strategy%20and,significant%20disruption%20to%20its%20operations.' },
  { 'id': 26, 'Term': 'Relational Database Service (RDS)', 'Description': 'RDS (Relational Database Service) is a web service that enables teams to set up, operate, and scale various services within the AWS cloud. RDS can handle numerous complex database management tasks.', 'Refrences': 'Amazon.(n.d.) What is Amazon Relational Database Service (Amazon RDS)? - Amazon Relational Database Service,Amazon,accessed 21 Aug 2023. https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Welcome.html.' },
  { 'id': 27, 'Term': 'Artificial Intelligence IT Operations (AIOps)', 'Description': 'AIOps refers to the integration of big data and machine learning to facilitate the automation of IT operational processes. It involves using AI to analyze networks and data, identifying issues for proactive prevention and prediction of future occurrences.', 'Refrences': 'Splunk. (n.d.) What is Artificial Intelligence for IT Operations (AIOPs)?.Splunk,accessed 21 Aug 2023. https://www.splunk.com/en_us/data-insider/ai-for-it-operations-aiops.html.' },
  { 'id': 28, 'Term': 'boundary value analysis (BVA)', 'Description': 'Boundary Value Analysis is centered around examining the extreme values within valid and invalid partitions. Behavior at the edges of these equivalence partitions tends to have a higher likelihood of errors compared to behavior within the partition itself, making boundary testing a fruitful area for defect identification.', 'Refrences': 'GeeksforGeeks. (2022), “Software testing boundary value analysis,” GeeksforGeeks,accessed 21 Aug 2023. https://www.geeksforgeeks.org/software-testing-boundary-value-analysis/.' },
  { 'id': 29, 'Term': 'Azure Resource Manager (ARM)', 'Description': 'ARM (Azure Resource Manager) is a deployment and management service within Azure. Teams can utilize its management layer to create, update, and delete resources.', 'Refrences': 'Tfitzmac. (2023). Azure Resource Manager overview - Azure Resource Manager,accessed 21 Aug 2023.https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/overview.' },
  { 'id': 30, 'Term': 'Common Language Infrastructure (CLI)', 'Description': 'CLI (Common Language Infrastructure) is a Microsoft specification. It is used to execute high-level language programs without altering the application code.', 'Refrences': 'Margaret R. (2019c) What is the Common Language Infrastructure (CLI)?. Definition from Techopedia,accessed 21 Aug 2023. https://www.techopedia.com/definition/24365/common-language-infrastructure-cli.' },
  { 'id': 31, 'Term': 'Kubernetes Pods', 'Description': 'It defines the smallest deployable computing units. A pod is a group or more containers. They can share storage and network resources.It has two ways to use, one is: pods that run a single container and another one is pods that run multiple containers that need to work together.', 'Refrences': 'Kubernetes.(n.d.). Changes to the location of Linux packages for Kubernetes. Kubernetes.accessed 9 September 2023.https://kubernetes.io/docs/concepts/workloads/pods/' },
  { 'id': 32, 'Term': 'Kubernetes cluster', 'Description': 'A Kubernetes cluster hosts containerized applications on nodes, offering flexibility and efficiency compared to virtual machines. It supports applications across diverse environments without OS limitations and typically includes a master node for control and multiple worker nodes, which can be physical or virtual machines.', 'Refrences': 'VMware.(n.d.).What is a Kubernetes cluster?.VMware.accessed 9 September 2023.https://www.vmware.com/au/topics/glossary/content/kubernetes-cluster.html#:~:text=A%20Kubernetes%20cluster%20is%20a,and%20flexible%20than%20virtual%20machines.' },
  { 'id': 33, 'Term': 'Kubernetes CLI tool', 'Description': 'kubectl, the Kubernetes command-line tool, is your go-to for deploying apps, managing cluster resources, and checking logs.', 'Refrences': 'kubernetes.(n.d.). Install tools kubectl.kubernetes.accessed 9 September 2023. https://kubernetes.io/docs/tasks/tools/#:~:text=kubectl,cluster%20resources%2C%20and%20view%20logs.' },
  { 'id': 34, 'Term': 'Terraform state', 'Description': 'Terraform relies on state to connect your configuration to actual resources, enhancing performance. Storing it securely in Terraform Cloud is advised for collaboration and security. This state is essential for Terraform to accurately implement changes and maintain alignment between your configuration and remote resources.', 'Refrences': 'Terraform.(n.d.). State.Terraform..accessed 9 September 2023.https://developer.hashicorp.com/terraform/language/state' },
  { 'id': 35, 'Term': 'HCL', 'Description': 'The fundamental syntax of the Terraform languageis user-friendly but can also be represented in JSON. It is based on HCL, a syntax used in other HashiCorp products, and while it is not necessary to understand all its intricacies for Terraform usage.', 'Refrences': 'Terraform.(n.d.). Configuration Syntax.Terraform.accessed 9 September 2023.https://developer.hashicorp.com/terraform/language/syntax/configuration' },
  { 'id': 36, 'Term': 'Vagrant VM', 'Description': 'Vagrant is an open-source utility for automating the setup and control of Virtual Machines (VMs). In essence, it define a VM is configuration in a straightforward file, and with a single command, Vagrant generates and manages the VM accordingly. Vagrant offers command-line tools for streamlining these operations.', 'Refrences': 'Samandal.(2021).What is vagrant?.GeeksforGeeks.accessed 9 September 2023. https://www.geeksforgeeks.org/what-is-vagrant/' },
  { 'id': 37, 'Term': 'deployment pipeline', 'Description': 'In software development, a deployment pipeline automates the process of moving code from version control to production, replacing time-consuming manual tasks. This automation empowers development teams to concentrate on innovation and accelerate code updates, all while minimizing the risk of human errors.', 'Refrences': 'PagerDuty.(n.d.). What is deployment pipeline?. PagerDuty.accessed 9 September 2023.https://www.pagerduty.com/resources/learn/what-is-a-deployment-pipeline/#:~:text=In%20software%20development%2C%20a%20deployment,%2C%20building%2C%20and%20deploying%20code.' },
  { 'id': 38, 'Term': 'Azure CLI tool', 'Description': 'The Azure Command-Line Interface (CLI) is a versatile cross-platform tool for administrating Azure resources through interactive commands or scripts.You can install the Azure CLI locally on Linux, macOS, or Windows machines, use it in a web browser via Azure Cloud Shell, or run it within a Docker container.', 'Refrences': 'Microsoft.(2023). What is the Azure CLI?.Microsoft.accessed 9 September 2023.https://learn.microsoft.com/en-us/cli/azure/what-is-azure-cli' },
  { 'id': 39, 'Term': 'Provider', 'Description': 'Terraform relies on providers, which are essentially plugins, to interface with cloud, SaaS, and API services. These providers need to be explicitly specified in Terraform configurations, enabling the handling of resources and data sources. Providers are indispensable for configuring different platforms, such as the cloud, and may include handy features like generating random numbers for unique resource names.', 'Refrences': 'Terraform.(n.d.). Providers. Terraform.accessed 9 September 2023.https://developer.hashicorp.com/terraform/language/providers' },
  { 'id': 40, 'Term': 'Terraform State Locking', 'Description': 'Terraform automatically applies state locking during operations that could alter the state to maintain data integrity. While it is possible to deactivate this with the -lock flag, it is generally discouraged to ensure consistent data management. Terraform notifies users about lock status delays, but its silent operation indicates ongoing state locking if the backend supports it.', 'Refrences': 'Terraform.(n.d.).State Locking.Terraform.accessed 9 September 2023.https://developer.hashicorp.com/terraform/language/state/locking' },
  { 'id': 41, 'Term': 'Bitbucket Pipelines', 'Description': 'Bitbucket Pipelines is a CI/CD service integrated into Bitbucket Cloud, enabling automatic code builds, tests, and deployments based on a repository configuration file. This service operates by creating customized cloud containers where commands are executed, ensuring a clean environment each time. The entire pipeline process is defined in a root-located YAML file named bitbucket-pipelines.yml.', 'Refrences': 'Atlassian support.(n.d.).Get started with Bitbucket Pipelines.Atlassian.accessed 23 September 2023. https://support.atlassian.com/bitbucket-cloud/docs/get-started-with-bitbucket-pipelines/' },
  { 'id': 42, 'Term': 'null_resource', 'Description': 'The null_resource in Terraform doesnt map to actual cloud resources and has no associated state. It is versatile, enabling shell commands and integrating with various Terraform components. Its primary role is to facilitate additional logic within Terraform configurations.', 'Refrences': 'Rahul, W.(2023). What is Terraform null Resource?. JHoop. accessed 23 September 2023. https://jhooq.com/terraform-null-resource/' },
  { 'id': 43, 'Term': 'Azure loadbalancer', 'Description': 'An internal load balancer operates with private IPs to manage traffic within a virtual network. It can be accessed from on-premises networks in hybrid setups.', 'Refrences': 'Microsoft.(2023).What is Azure Load Balancer?. Microsoft.accessed 23 September 2023.https://learn.microsoft.com/en-us/azure/load-balancer/load-balancer-overview' },
  { 'id': 44, 'Term': 'docker timestamp', 'Description': 'A container packages code and its dependencies to ensure consistent application execution across environments. Docker container images, lightweight and standalone, contain everything required for an application, and become operational containers on the Docker Engine. These containers guarantee software consistency and isolation, mitigating differences like those between development and staging.', 'Refrences': 'Docker.(n.d.).Use containers to Build, Share and Run your applications. accessed 23 September 2023.https://www.docker.com/resources/what-container/#:~:text=A%20Docker%20container%20image%20is,tools%2C%20system%20libraries%20and%20settings.' },
  { 'id': 45, 'Term': 'SSH key', 'Description': 'SSH key pairs, with a public and private key, authenticate users accessing remote systems. The public key encrypts messages while the private key decrypts them. A challenge-response sequence verifies authentication automatically during connection requests.', 'Refrences': 'SECTIGO.(2020). SSH Keys Explained: Generation, Authentication, Key Pair Info & More.SECTIGO.accessed 23 September 2023.https://www.sectigo.com/resource-library/what-is-an-ssh-key#:~:text=The%20SSH%20key%20pair%20is,in%20a%20public%20key%20file.' },
  { 'id': 46, 'Term': 'Monorepo', 'Description': 'The monorepo approach consolidates code for various libraries or services into one repository. In its most extensive form, a company is entire codebase, across multiple projects and languages, resides in this single repository.', 'Refrences': 'Leonado, L. (2023). Monorepo vs Multi-Repo: Pros and Cons of Code Repository Strategies. Kinsta.accessed 23 September 2023. https://kinsta.com/blog/monorepo-vs-multi-repo/' },
  { 'id': 47, 'Term': 'shell script', 'Description': 'A shell script is a text file containing a series of commands for UNIX-based operating systems, automating sequences typically entered manually in the command-line interface (CLI). Users execute these sequences by entering the script is filename on a command line. While referred to as a batch file in DOS, it is called an EXEC in IBM is mainframe VM systems.', 'Refrences': 'TechTarget Contributor.(n.d.). DEFINITION shell sript.TechTarget. accessed 23 September 2023. https://www.techtarget.com/searchdatacenter/definition/shell-script#:~:text=A%20shell%20script%20is%20a,time%2C%20into%20a%20single%20script.' },
  { 'id': 48, 'Term': 'multi-repo', 'Description': 'The multi-repo approach hosts different libraries or services of a project across multiple repositories. In its most extreme form, each small set of reusable code or standalone functionality has its own repository.', 'Refrences': 'Leonado, L. (2023). Monorepo vs Multi-Repo: Pros and Cons of Code Repository Strategies. Kinsta.accessed 23 September 2023. https://kinsta.com/blog/monorepo-vs-multi-repo/' },
  { 'id': 49, 'Term': 'Kubernetes secret', 'Description': 'In Kubernetes, a Secret securely stores sensitive data, preventing direct embedding in application code. This method reduces data exposure risks during pod operations. Enhanced measures ensure Secrets are not saved to nonvolatile storage.', 'Refrences': 'Kubernetes.(2023). Secrets. Kubernetes.accessed 23 September 2023. https://kubernetes.io/docs/concepts/configuration/secret/' },
  { 'id': 50, 'Term': 'local-exec', 'Description': 'Terraform, an Infrastructure as Code tool, provides the local-exec provisioner to run local executables post-resource creation. This feature is especially useful for tasks like executing MySQL scripts.Essentially, the local-exec command carries out operations on the machine running Terraform after a resource update.', 'Refrences': 'Saturn, C. (2023). Executing MySQL Scripts with Terraform is Local-Exec Command: A Comprehensive Guide. SaturnCloud.accessed 23 September 2023. https://saturncloud.io/blog/executing-mysql-scripts-with-terraforms-localexec-command-a-comprehensive-guide/#:~:text=Terraforms%20local%2Dexec%20command%20is,has%20been%20created%20or%20modified.' },
];




/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'SIT722 DevOps Glossary', subheading: 'my website showing a collection of DevOps terms and their brief descriptions',
    items: itemList
  });
});

module.exports = router;
