# Week 0 — Billing and Architecture


## Software Architecture Diagrams

**C4 Model** C4 models are a set of software architecture models that provide a way to describe, document, and communicate the architecture of a software system. The C4 model was created by Simon Brown and is based on four levels of abstraction: context, containers, components, and code. The four levels of the C4 model are designed to provide different levels of detail and abstraction for different audiences.

Here's a brief overview of each level of the C4 model:

- Context: The context level provides a high-level view of the system and its environment. It shows the system in relation to other systems, users, and external factors.

- Containers: The container level shows the high-level components of the system and how they interact with each other. It provides a way to group related components and show how they are connected.

- Components: The component level shows the individual components that make up the containers. It provides a way to show the internal structure of the system and how the components interact with each other.

- Code: The code level shows the implementation details of the components. It provides a way to show how the components are implemented and how they are connected to each other.

### Conceptual Architecture

A conceptual architecture diagram is a high-level visual representation of the structure and components of a system or application. It typically shows the major components, their relationships, and how they interact with each other. Conceptual architecture diagrams are often used to communicate the overall structure of a system to stakeholders and other interested parties. A conceptual architecture diagram can help stakeholders understand the overall structure of a system and the relationships between its components. It can also serve as a starting point for more detailed design and planning activities.

![Conceptual Architecture](journal_assets/week0/LucidChart-ConceptualDesign.png)

### Logical Architecture

A logical architecture diagram is a visual representation of the logical components, data flows, and interactions of a system or application. It focuses on the functional components of the system rather than the physical components. A logical architecture diagram is used to describe the structure and behavior of a system or application and is typically created during the early stages of system design.

![Logical Architecture](journal_assets/week0/LucidChart-LogicalDesign.png)

The link to the architecture diagram on LucidChart is [LucidChart Link](https://lucid.app/lucidchart/2c0e42fc-d6b4-4a91-9e48-ac652712fcbd/edit?viewport_loc=486%2C-194%2C1424%2C833%2Cd19xGk5ETTT.&invitationId=inv_e7183d1d-c9a4-4673-a2d7-a7e46dfd7211)


## Homework Challenges

### Challenge 1: Set up AWS CLI on GitPod workspace

I was able to set up AWS CLI on my GitPod workspace. I followed the instructions on the [AWS CLI Documentation](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2-linux.html#cliv2-linux-install) and was able to install the AWS CLI on my workspace by setting it up as a task to the gitpod.yml file and also did try to set it up on my local. I was able to run the `aws --version` command and got the following output: 

```bash
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install
```

![AWS CLI](journal_assets/week0/AWS-CLI.png)

### Challenge 2: Creating a billing alarm to monitor your estimated AWS charges

Billing metric for AWS accounts are stored in US East 1 region (North Carolina) and this represents all usage across AWS regions. The allarm will be trigger when the current billing exceeds the threshold of $1.00. The alarm will be sent to my email address.

**Stesps for creating the billing alarm:**

- Enable billing alerts for your AWS account from Billing Prefereces page
- Create a Billing Alarm from CloudWatch console, create Alarm, select Billing metric, select the threshold, and under notification create an SNS topic and add your email address. configure the alarm to send the notification to your email address, accept the SNS topic request from your email.

![Billing Alarm](journal_assets/week0/Billing-Alarm.png)

![Billing Alarm](journal_assets/week0/Billing-Alarm2.png)

![Billing Alarm](journal_assets/week0/Billing-Alarm3.png)

![Billing Alarm](journal_assets/week0/Billing-Alarm4.png)

![Billing Alarm](journal_assets/week0/Billing-Alarm6.png)


### Challenge 3: Create a AWS  Budget

I created a budget for my AWS account. I set the budget to $1.00 and the budget will be sent to my email address. I also set the budget to send a notification when the budget is 75% of the threshold.

![Budget](journal_assets/week0/Budget-Alert0.png)

![Budget](journal_assets/week0/AWS-Budget.png)
