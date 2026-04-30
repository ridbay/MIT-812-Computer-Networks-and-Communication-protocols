import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileEdit,
  BookOpen,
  ChevronDown,
  ChevronUp,
  Search,
  Info,
} from "lucide-react";

interface QuestionItem {
  question: string;
  answer: string;
}

interface AssignmentSet {
  id: number;
  title: string;
  items: QuestionItem[];
}

const Assignment: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedKeys, setExpandedKeys] = useState<Record<string, boolean>>({});

  const assignmentSets: AssignmentSet[] = [
    {
      id: 1,
      title: "Section 1: Introduction",
      items: [
        {
          question:
            "Question 1: What is the difference between a host and an end system? List several different types of end systems. Is a Web server an end system?",
          answer:
            "In the context of computer networks, the terms **host** and **end system** are often used interchangeably to refer to the same concept: a device connected to the internet or a network that runs application programs. These devices are at the \nedge of the network, where applications and services interact with users or other applications.\n\n**Types of End Systems:**\n*   **Personal Computers:** Laptops, desktops, workstations.\n*   **Mobile Devices:** Smartphones, tablets.\n*   **Servers:** Web servers, email servers, file servers, database servers.\n*   **Internet of Things (IoT) Devices:** Smart sensors, smart home appliances, wearable devices.\n*   **Gaming Consoles:** Devices used for online gaming.\n\n**Is a Web server an end system?**\nYes, a Web server is indeed an end system. It runs application programs (web server software) that provide services (like serving web pages) to other end systems (clients) over the network. It initiates and receives communication, making it a participant at the edge of the network.",
        },
        {
          question:
            "Question 2: The word protocol is often used to describe diplomatic relations. How does Wikipedia describe diplomatic protocol?",
          answer:
            "According to Wikipedia, **diplomatic protocol** refers to the set of established rules of etiquette and procedure that guide interactions between states and their representatives. These rules ensure that diplomatic exchanges are conducted smoothly, respectfully, and effectively, minimizing misunderstandings and maintaining order in international relations. It covers aspects such as forms of address, seating arrangements, precedence, and ceremonial procedures.\n\nIn essence, diplomatic protocol provides a common framework and a shared understanding of how interactions should occur, much like communication protocols in computer networks define how devices should interact.",
        },
        {
          question: "Question 3: Why are standards important for protocols?",
          answer:
            "Standards are crucial for protocols in computer networks for several key reasons:\n\n1.  **Interoperability:** Standards ensure that different devices and software from various manufacturers can communicate with each other seamlessly. Without standards, a device made by one company might not be able to understand data sent by a device from another company, leading to a fragmented and incompatible network environment.\n2.  **Universal Connectivity:** Standards allow for the creation of a global network like the Internet. Any device adhering to the established protocols can connect and exchange information with any other device on the Internet, regardless of its underlying hardware or operating system.\n3.  **Innovation and Competition:** By providing a common foundation, standards encourage innovation. Manufacturers can focus on developing new features and improving performance, knowing that their products will still be compatible with the existing network infrastructure. This also fosters competition, as multiple vendors can offer compliant products.\n4.  **Reduced Costs:** Standardized protocols simplify network design, implementation, and maintenance. This reduces complexity and costs for both manufacturers and users, as there's no need to develop custom solutions for every unique communication scenario.\n5.  **Ease of Development:** Developers can build applications and services that rely on well-defined protocols, making the development process more straightforward and efficient. They don't have to reinvent the wheel for basic communication functionalities.\n\nIn summary, standards are the bedrock of modern networking, enabling the vast, interconnected, and efficient communication systems we rely on today.",
        },
        {
          question:
            "Question 4: Suppose there is exactly one packet switch between a sending host and a receiving host. The transmission rates between the sending host and the switch and between the switch and the receiving host are R1 and R2, respectively. Assuming that the switch uses store-and-forward packet switching, what is the total end-to-end delay to send a packet of length L? (Ignore queuing, propagation delay, and processing delay.)",
          answer:
            "For a single packet of length L, with one packet switch using store-and-forward, the total end-to-end delay is the sum of the transmission delays at each link.\n\n*   **Transmission delay from sending host to switch:** This is the time it takes to push all bits of the packet onto the link. It is calculated as the packet length (L) divided by the transmission rate (R1).\n    *   `Delay_1 = L / R1`\n\n*   **Transmission delay from switch to receiving host:** Since the switch uses store-and-forward, it must receive the entire packet before it can begin transmitting it to the receiving host. Once the entire packet is received, it then takes time to push all bits of the packet onto the second link. This is calculated as the packet length (L) divided by the transmission rate (R2).\n    *   `Delay_2 = L / R2`\n\n**Total End-to-End Delay:**\n`Total Delay = Delay_1 + Delay_2 = (L / R1) + (L / R2)`\n\nTherefore, the total end-to-end delay to send a packet of length L is `L/R1 + L/R2`.",
        },
        {
          question:
            "Question 5: What advantage does a circuit-switched network have over a packet-switched network?",
          answer:
            "**Circuit-switched networks** establish a dedicated communication path (a circuit) between two communicating parties for the duration of their conversation. This circuit is reserved exclusively for them, and no other communication can use it until the connection is terminated. The primary advantage of a circuit-switched network over a packet-switched network is:\n\n*   **Guaranteed Performance/Quality of Service (QoS):** Once a circuit is established, the resources (bandwidth) are dedicated and reserved. This means that communication over a circuit-switched network experiences a constant and predictable data rate, minimal delay, and no packet loss due to congestion. This makes it ideal for applications that require real-time, continuous data flow with strict quality requirements, such as traditional telephone calls.\n\nIn contrast, **packet-switched networks** (like the Internet) share network resources among many users, sending data in small units called packets. While more efficient for bursty data, they cannot inherently guarantee performance due to potential congestion and variable delays.",
        },
        {
          question:
            "Question 6: Why will two ISPs at the same level of the hierarchy often peer with each other? How does an IXP earn money?",
          answer:
            "**Why ISPs Peer:**\nTwo Internet Service Providers (ISPs) at the same level of the hierarchy (e.g., two Tier-1 ISPs or two regional ISPs) will often **peer** with each other to exchange traffic directly between their networks. The primary motivations for peering are:\n\n1.  **Cost Reduction:** Peering allows ISPs to avoid paying transit fees to a third-party upstream ISP to carry traffic destined for each other's networks. By exchanging traffic directly, they reduce their operational costs.\n2.  **Improved Performance:** Direct peering eliminates intermediate hops, which can significantly reduce latency and improve throughput for traffic exchanged between the peered networks. This leads to a better user experience for customers of both ISPs.\n3.  **Increased Redundancy and Resilience:** Peering provides alternative paths for traffic, enhancing the network's resilience. If a connection to an upstream provider fails, traffic can still flow between peered networks.\n\n**How an IXP Earns Money:**\nAn **Internet Exchange Point (IXP)** is a physical infrastructure through which ISPs and other network operators exchange Internet traffic between their networks. IXPs typically earn money through:\n\n1.  **Port Fees/Membership Fees:** IXPs charge participating ISPs and network operators a fee for connecting to their infrastructure. These fees are often based on the port speed (e.g., 1 Gbps, 10 Gbps, 100 Gbps) or a flat membership fee.\n2.  **Additional Services:** Some IXPs may offer value-added services, such as colocation (housing equipment in their data centers), managed peering services, or access to route servers, for which they charge additional fees.\n\nIXPs facilitate peering, making it easier and more cost-effective for multiple networks to interconnect in a neutral location.",
        },
        {
          question:
            "Question 7: Some content providers have created their own networks. What motivates content providers to create these networks?",
          answer:
            "Major content providers, such as Google (YouTube), Netflix, and Meta (Facebook), are increasingly building their own private global networks, often referred to as **Content Delivery Networks (CDNs)** or private backbones. The motivations for doing so are primarily:\n\n1.  **Improved Performance and User Experience:** By owning and controlling their network infrastructure, content providers can optimize the delivery of their content. They can place servers closer to end-users (edge servers), reducing latency and improving loading times for videos, images, and web pages. This directly translates to a better and faster user experience.\n2.  **Cost Reduction:** While building and maintaining a global network is a significant investment, it can ultimately reduce costs. Content providers generate massive amounts of traffic. By carrying this traffic over their own network and peering directly with ISPs, they can reduce or eliminate the need to pay transit fees to third-party ISPs for delivering their content.\n3.  **Enhanced Reliability and Control:** Owning the network gives content providers greater control over their traffic flow and routing. They can implement their own redundancy measures and traffic engineering policies, leading to higher reliability and availability of their services. They are less dependent on the performance and policies of external ISPs.\n4.  **Security:** A private network allows content providers to implement their own security measures and have better visibility and control over potential threats, enhancing the security of their data and services.\n5.  **Scalability:** As their user base and content volume grow, content providers need highly scalable infrastructure. Building their own networks allows them to scale their capacity precisely as needed, without being constrained by external providers.\n\nIn essence, these content providers are taking greater control over the entire delivery chain to ensure optimal performance, cost efficiency, and reliability for their vast and demanding services.",
        },
        {
          question:
            "Question 8: Consider sending a packet from a source host to a destination host over a fixed route. List the delay components in the end-to-end delay. Which of these delays are constant and which are variable?",
          answer:
            "When a packet travels from a source host to a destination host, it experiences several types of delays. The total end-to-end delay is the sum of these individual delay components:\n\n1.  **Processing Delay (Variable):**\n    *   **Description:** This is the time a router takes to examine the packet's header, determine the outgoing link, and perform error checking. It also includes the time to move the packet from the input buffer to the output buffer.\n    *   **Variability:** Generally very small, but can vary slightly depending on router load and complexity of routing table lookups.\n\n2.  **Queuing Delay (Highly Variable):**\n    *   **Description:** This is the time a packet spends waiting in a queue (buffer) at the router's output link before it can be transmitted. This happens if other packets are already waiting to be transmitted over the same link.\n    *   **Variability:** Highly variable. It can be zero if the queue is empty, or it can be very large if the queue is congested. It depends heavily on the level of network traffic and congestion.\n\n3.  **Transmission Delay (Constant for a given packet and link):**\n    *   **Description:** This is the time required to push all of the packet's bits onto the link. It is calculated as the packet's length (L) divided by the link's transmission rate (R).\n    *   `Transmission Delay = L / R`\n    *   **Variability:** Constant for a given packet length and link speed. It does not change with network congestion.\n\n4.  **Propagation Delay (Constant for a given link distance):**\n    *   **Description:** This is the time it takes for a bit to travel from the beginning of the link to the end of the link. It depends on the physical distance (d) between the two nodes and the propagation speed (s) of the signal in the medium.\n    *   `Propagation Delay = d / s`\n    *   **Variability:** Constant for a given physical link. It does not change with network congestion.\n\n**Summary of Variability:**\n*   **Constant Delays:** Transmission Delay, Propagation Delay\n*   **Variable Delays:** Processing Delay, Queuing Delay",
        },
        {
          question:
            "Question 9: How long does it take a packet of length 1,000 bytes to propagate over a link of distance 2,500 km, propagation speed 2.5 * 10^8 m/s, and transmission rate 2 Mbps? More generally, how long does it take a packet of length L to propagate over a link of distance d, propagation speed s, and transmission rate R bps? Does this delay depend on packet length? Does this delay depend on transmission rate?",
          answer:
            'Let\'s break this down into two parts: the specific calculation and the general formula with dependencies.\n\n**Specific Calculation:**\nGiven:\n*   Packet length (L) = 1,000 bytes = 1,000 * 8 bits = 8,000 bits\n*   Distance (d) = 2,500 km = 2,500 * 1,000 meters = 2,500,000 meters\n*   Propagation speed (s) = 2.5 * 10^8 m/s\n*   Transmission rate (R) = 2 Mbps = 2 * 10^6 bits/s\n\n1.  **Transmission Delay:** Time to push all bits onto the link.\n    `Transmission Delay = L / R = 8,000 bits / (2 * 10^6 bits/s) = 0.004 seconds`\n\n2.  **Propagation Delay:** Time for the first bit to travel across the link.\n    `Propagation Delay = d / s = 2,500,000 m / (2.5 * 10^8 m/s) = 0.01 seconds`\n\n**Total Time:** In this scenario, \nthe question asks "how long does it take a packet of length L to **propagate** over a link". This specifically refers to the propagation delay, which is the time it takes for the *first bit* to travel across the link. The transmission delay is the time it takes for the *entire packet* to be put onto the link. If the question implies the time until the *entire packet* has been received at the other end of the link, then both delays would be relevant.\n\nAssuming the question is asking for the time until the *entire packet* has traversed the link (i.e., the time from when the first bit leaves the sender until the last bit arrives at the receiver), then the total time would be the sum of transmission delay and propagation delay.\n\n`Total Time = Transmission Delay + Propagation Delay = 0.004 s + 0.01 s = 0.014 seconds`\n\n**General Formula:**\nFor a packet of length L, distance d, propagation speed s, and transmission rate R:\n\n*   **Transmission Delay:** `L / R`\n*   **Propagation Delay:** `d / s`\n\n**Total Time to traverse the link (from first bit sent to last bit received):** `(L / R) + (d / s)`\n\n**Dependencies:**\n*   **Does this delay depend on packet length?** Yes, the **transmission delay** component (`L/R`) directly depends on the packet length (L). A longer packet takes more time to transmit.\n*   **Does this delay depend on transmission rate?** Yes, the **transmission delay** component (`L/R`) inversely depends on the transmission rate (R). A higher transmission rate means less time to transmit the packet.',
        },
        {
          question:
            "Question 10: Suppose Host A wants to send a large file to Host B. The path from Host A to Host B has three links of rates R1=500 kbps, R2=2 Mbps, and R3=1 Mbps.\na. Assuming no other traffic in the network, what is the throughput for the file transfer?\n    b. Suppose the file is 4 million bytes. Dividing the file size by the throughput, roughly how long will it take to transfer the file to Host B?\n    c. Repeat (a) and (b), but now with R reduced to 100 kbps.",
          answer:
            "**Part a. Throughput for the file transfer:**\nIn a network path with multiple links, the **throughput** (the actual rate at which data is transferred) is limited by the slowest link in the path. This slowest link is often called the **bottleneck link**.\n\nGiven link rates:\n*   R1 = 500 kbps = 0.5 Mbps\n*   R2 = 2 Mbps\n*   R3 = 1 Mbps\n\nThe slowest link is R1 at 500 kbps.\n\nTherefore, the **throughput for the file transfer is 500 kbps**.\n\n**Part b. Time to transfer a 4 million byte file:**\nFile size = 4 million bytes = 4,000,000 bytes\nConvert file size to bits: `4,000,000 bytes * 8 bits/byte = 32,000,000 bits`\nThroughput = 500 kbps = 500,000 bits/s\n\nTime to transfer = `File size / Throughput`\n`Time = 32,000,000 bits / 500,000 bits/s = 64 seconds`\n\nIt will take approximately **64 seconds** to transfer the file to Host B.\n\n**Part c. Repeat (a) and (b) with R reduced to 100 kbps.**\nIt seems there's a slight ambiguity in \nthe question regarding which 'R' is reduced to 100 kbps. Assuming 'R' refers to the bottleneck link rate, or if R1 is reduced to 100 kbps (making it the new bottleneck):\n\n**New Throughput:** 100 kbps = 100,000 bits/s\n\n**New Time to transfer a 4 million byte file:**\nFile size = 32,000,000 bits (as calculated before)\nNew Throughput = 100,000 bits/s\n\nTime = `File size / New Throughput`\n`Time = 32,000,000 bits / 100,000 bits/s = 320 seconds`\n\nIt will now take approximately **320 seconds** to transfer the file to Host B.",
        },
        {
          question:
            "Question 11: Suppose end system A wants to send a large file to end system B. At a very high level, describe how end system A creates packets from the file. When one of these packets arrives to a router, what information in the packet does the router use to determine the link onto which the packet is forwarded? Why is packet switching in the Internet analogous to driving from one city to another and asking directions along the way?",
          answer:
            "**How End System A Creates Packets:**\nWhen end system A wants to send a large file to end system B, the file is first handed over to the application layer. The application layer then passes the data down to the transport layer. The transport layer (typically TCP for file transfers) breaks the large file into smaller, manageable chunks. Each chunk is then encapsulated with a transport layer header (containing information like source and destination port numbers) to form a **segment**. This segment is then passed to the network layer.\n\nThe network layer takes each segment, adds its own header (containing information like source and destination IP addresses), and creates a **datagram** (often referred to as a packet at this layer). These datagrams are then passed down to the link layer, which further encapsulates them into **frames** for transmission over the physical link.\n\n**Information a Router Uses for Forwarding:**\nWhen a packet (datagram) arrives at a router, the router examines the **destination IP address** in the packet's network-layer header. The router then consults its **forwarding table** (also known as a routing table or lookup table). The forwarding table contains entries that map ranges of destination IP addresses to outgoing links. Based on the destination IP address, the router determines the appropriate outgoing link through which the packet should be sent to get closer to its final destination.\n\n**Analogy to Driving and Asking Directions:**\nPacket switching in the Internet is analogous to driving from one city to another and asking for directions along the way for the following reasons:\n\n*   **No Fixed Path (Packet Switching):** When you drive from one city to another, you don't necessarily have a single, pre-determined, dedicated road for your entire journey. You might take different roads, highways, or even detours depending on traffic, road conditions, or your preferences. Similarly, in packet switching, packets from the same message might take different paths to reach the destination, and there's no dedicated circuit.\n*   **Asking Directions (Routing/Forwarding):** As you drive, you might stop at various intersections or towns and \nask someone (or check a map/GPS) \"Which way to City B?\". The person or map tells you the next road to take. In the Internet, a packet arrives at a router (the intersection), and the router looks at the destination IP address (City B) and checks its forwarding table (the map/person) to determine the next link (the next road) to send the packet on.\n*   **Hop-by-Hop Decision:** The decision of which way to go is made at each step (hop) of the journey, not all at once at the beginning. A router only knows the *next* step for a packet, not the entire path from source to destination.\n\n---",
        },
      ],
    },
    {
      id: 2,
      title: "Section 2: Application Layer",
      items: [
        {
          question:
            "Question 1: What is the difference between network architecture and application architecture?",
          answer:
            "*   **Network Architecture:** This refers to the organization of the communication process into layers (like the 5-layer TCP/IP model or the 7-layer OSI model). It defines the protocols, interfaces, and services provided by each layer to enable communication between devices across a network. Network architecture is fixed and provides a specific set of services to applications.\n*   **Application Architecture:** This is designed by the application developer and dictates how the application is structured over the various end systems. It defines how the application's components (processes) interact with each other. Common application architectures include Client-Server architecture and Peer-to-Peer (P2P) architecture. Application architecture is built *on top* of the network architecture.",
        },
        {
          question:
            "Question 2: For a communication session between a pair of processes, which process is the client and which is the server?",
          answer:
            "In a communication session between a pair of processes:\n*   The **client** process is the one that initiates the communication. It is the process that actively reaches out to contact the other process to request a service or information.\n*   The **server** process is the one that waits to be contacted. It passively listens for incoming requests from client processes and responds to them.",
        },
        {
          question:
            "Question 3: What information is used by a process running on one host to identify a process running on another host?",
          answer:
            "To identify a specific process running on another host, a process needs two pieces of information:\n1.  **IP Address:** This identifies the specific host (computer or device) on the network where the target process is running.\n2.  **Port Number:** This identifies the specific process or application running on that host. Different applications on the same host are assigned different port numbers (e.g., a web server typically uses port 80, an email server might use port 25).\n\nTogether, the IP address and port number form a unique identifier for a process on a network, often referred to as a socket address.",
        },
        {
          question:
            "Question 4: List the four broad classes of services that a transport protocol can provide. For each of the service classes, indicate if either UDP or TCP (or both) provides such a service.",
          answer:
            "The four broad classes of services a transport protocol can provide are:\n\n1.  **Reliable Data Transfer:** Guarantees that data sent by one application is delivered correctly and completely to the receiving application, without errors or loss.\n    *   **TCP:** Provides reliable data transfer.\n    *   **UDP:** Does *not* provide reliable data transfer.\n\n2.  **Throughput:** Guarantees a certain minimum rate at which data can be transferred.\n    *   **TCP:** Does *not* provide throughput guarantees.\n    *   **UDP:** Does *not* provide throughput guarantees.\n\n3.  **Timing:** Guarantees that data will be delivered within a specified time limit (e.g., low delay for real-time applications).\n    *   **TCP:** Does *not* provide timing guarantees.\n    *   **UDP:** Does *not* provide timing guarantees.\n\n4.  **Security:** Provides services like encryption, data integrity, and end-point authentication.\n    *   **TCP:** Does *not* inherently provide security (though it can be paired with SSL/TLS to provide it).\n    *   **UDP:** Does *not* inherently provide security.",
        },
        {
          question: "Question 5: What is meant by a handshaking protocol?",
          answer:
            "A **handshaking protocol** is a process where two communicating entities exchange preliminary messages before they begin transferring the actual data. The purpose of this handshake is to establish a connection, agree on communication parameters, and ensure that both sides are ready to communicate.\n\nFor example, in TCP, the 3-way handshake (SYN, SYN-ACK, ACK) is used to establish a connection, synchronize sequence numbers, and allocate buffers before any application data is sent.",
        },
        {
          question:
            "Question 6: Why do HTTP, SMTP, and POP3 run on top of TCP rather than on UDP?",
          answer:
            "HTTP (HyperText Transfer Protocol), SMTP (Simple Mail Transfer Protocol), and POP3 (Post Office Protocol version 3) run on top of TCP because they all require **reliable data transfer**.\n\n*   **HTTP:** When you request a web page, you want all the text, images, and formatting to arrive intact. If parts of the page were lost, it would render incorrectly or be unreadable.\n*   **SMTP and POP3:** When sending or receiving an email, it is crucial that the entire message, including attachments, is delivered without any missing or corrupted parts.\n\nTCP provides this reliability by ensuring that all data packets arrive in order and without errors, retransmitting any lost packets. UDP, being unreliable, could result in missing parts of web pages or corrupted emails, which is unacceptable for these applications.",
        },
        {
          question:
            "Question 7: Consider an HTTP client that wants to retrieve a Web document at a given URL. The IP address of the HTTP server is initially unknown. What transport and application-layer protocols besides HTTP are needed in this scenario?",
          answer:
            "If the IP address of the HTTP server is initially unknown (which is typical when a user types a URL like `www.example.com`), the following protocols are needed besides HTTP:\n\n*   **Application-Layer Protocol:** **DNS (Domain Name System)**. The client must first use DNS to resolve the hostname (e.g., `www.example.com`) into an IP address.\n*   **Transport-Layer Protocol for DNS:** **UDP (User Datagram Protocol)**. DNS queries and responses are typically sent using UDP because they are short messages and speed is prioritized over reliability for this specific task.\n*   **Transport-Layer Protocol for HTTP:** **TCP (Transmission Control Protocol)**. Once the IP address is known, the HTTP client uses TCP to establish a reliable connection with the HTTP server to retrieve the web document.\n\n---",
        },
      ],
    },
    {
      id: 3,
      title: "Section 3: Transport Layer",
      items: [
        {
          question:
            "Question 1: Consider a TCP connection between Host A and Host B. Suppose that the TCP segments traveling from Host A to Host B have source port number x and destination port number y. What are the source and destination port numbers for the segments traveling from Host B to Host A?",
          answer:
            "For segments traveling from Host B back to Host A, the port numbers are reversed:\n*   **Source port number:** y (This was the destination port for segments from A to B).\n*   **Destination port number:** x (This was the source port for segments from A to B).",
        },
        {
          question:
            "Question 2: Describe why an application developer might choose to run an application over UDP rather than TCP.",
          answer:
            "An application developer might choose UDP over TCP for several reasons:\n\n1.  **Finer Application-Level Control over What Data is Sent and When:** Under UDP, as soon as an application passes data to the transport layer, UDP packages it and immediately passes it to the network layer. TCP, on the other hand, has congestion control mechanisms that might delay transmission if the network is congested. For real-time applications (like voice or video), delaying data is often worse than losing a small amount of it.\n2.  **No Connection Establishment:** UDP does not require a formal handshake before sending data. This eliminates the delay associated with establishing a connection (like TCP's 3-way handshake), making it faster to start transmitting data. This is beneficial for applications like DNS, where a quick query and response are needed.\n3.  **No Connection State:** UDP does not maintain connection state (like receive and send buffers, congestion control parameters, and sequence/acknowledgment number parameters) at the end systems. This means a server can support many more active clients when using UDP compared to TCP.\n4.  **Small Packet Header Overhead:** The UDP header is only 8 bytes long, whereas the TCP header is typically 20 bytes. This means less overhead per packet, which can be significant for applications sending many small messages.",
        },
        {
          question:
            "Question 3: Why is it that voice and video traffic is often sent over TCP rather than UDP in today's Internet? (Hint: The answer we are looking for has nothing to do with TCP's congestion-control mechanism.)",
          answer:
            "While UDP is theoretically better suited for real-time voice and video due to its lower latency and lack of congestion control delays, much of this traffic is actually sent over TCP in today's Internet. The primary reason is **firewalls and Network Address Translators (NATs)**.\n\nMany corporate and home firewalls are configured to block most UDP traffic for security reasons, as UDP is often used in denial-of-service attacks. However, they almost always allow TCP traffic on port 80 (HTTP) and port 443 (HTTPS) because these are essential for web browsing. Therefore, to ensure that their voice and video streams can successfully pass through these firewalls and reach users, content providers often encapsulate their media streams within HTTP/TCP.",
        },
        {
          question:
            "Question 4: Is it possible for an application to enjoy reliable data transfer even when the application runs over UDP? If so, how?",
          answer:
            "Yes, it is possible for an application to enjoy reliable data transfer even when running over UDP.\n\nTo achieve this, the **reliability mechanisms must be implemented within the application itself**. Since UDP does not provide reliability (it doesn't guarantee delivery, order, or error correction), the application developer must build features like acknowledgments, sequence numbers, timers, and retransmissions directly into the application's code. This allows the application to benefit from UDP's speed and lack of connection overhead while still ensuring data integrity, although it requires significantly more effort from the developer.",
        },
        {
          question:
            "Question 5: Suppose a process in Host C has a UDP socket with port number 6789. Suppose both Host A and Host B each send a UDP segment to Host C with destination port number 6789. Will both of these segments be directed to the same socket at Host C? If so, how will the process at Host C know that these two segments originated from two different hosts?",
          answer:
            "Yes, both segments will be directed to the **same socket** at Host C. A UDP socket is fully identified by a two-tuple consisting of a destination IP address and a destination port number. Since both segments have the same destination IP (Host C) and the same destination port (6789), the operating system at Host C will direct them to the same socket.\n\nThe process at Host C will know that these two segments originated from two different hosts because **each received UDP segment includes the source IP address and source port number** in its header. When the application reads the data from the socket, the operating system also provides the source IP and port information, allowing the application to distinguish between the sender (Host A vs. Host B) and respond appropriately.",
        },
        {
          question:
            "Question 6: Suppose that a Web server runs in Host C on port 80. Suppose this Web server uses persistent connections, and is currently receiving requests from two different Hosts, A and B. Are all of the requests being sent through the same socket at Host C? If they are being passed through different sockets, do both of the sockets have port 80? Discuss and explain.",
          answer:
            "No, the requests are **not** being sent through the same socket at Host C. They are being passed through **different sockets**.\n\nYes, **both of these sockets have port 80** as their local port number.\n\n**Explanation:**\nA TCP socket is identified by a four-tuple: (source IP address, source port number, destination IP address, destination port number).\n\nWhen Host A connects to the Web server (Host C), a TCP connection is established. The socket for this connection at Host C is identified by: (Host A's IP, Host A's source port, Host C's IP, Port 80).\n\nWhen Host B connects to the Web server, a separate TCP connection is established. The socket for this connection at Host C is identified by: (Host B's IP, Host B's source port, Host C's IP, Port 80).\n\nEven though both sockets at Host C use port 80, the operating system can distinguish between them because the source IP addresses (and likely source ports) are different. The Web server typically has a \"listening socket\" on port 80 that accepts incoming connection requests. When a request arrives, it creates a new, dedicated \"connection socket\" (also on port 80) specifically for communicating with that client, allowing it to handle multiple persistent connections simultaneously.",
        },
        {
          question:
            "Question 7: In our rdt protocols, why did we need to introduce sequence numbers?",
          answer:
            "In Reliable Data Transfer (rdt) protocols, sequence numbers are introduced to solve the problem of **duplicate packets**.\n\nWhen a sender transmits a packet and doesn't receive an acknowledgment (ACK) within a certain time (due to the packet or the ACK being lost or delayed), it retransmits the packet. If the original packet was actually received but the ACK was lost, the receiver will receive a duplicate packet. Without sequence numbers, the receiver has no way of knowing if the newly arrived packet is a new piece of data or a retransmission of a packet it has already received and processed.\n\nBy adding a sequence number to each packet, the receiver can check the sequence number of an incoming packet. If it matches the sequence number of a packet it has already received, it knows it's a duplicate and can discard it (while still sending an ACK to let the sender know it was received).",
        },
        {
          question:
            "Question 8: In our rdt protocols, why did we need to introduce timers?",
          answer:
            "Timers are introduced in rdt protocols to handle **packet loss**.\n\nIf a packet sent by the sender is lost in the network, or if the acknowledgment (ACK) sent by the receiver is lost, the sender would wait indefinitely for an ACK that will never arrive. This would cause the communication to stall completely.\n\nTo prevent this, the sender starts a timer when it transmits a packet. If the timer expires (times out) before an ACK is received for that packet, the sender assumes the packet (or its ACK) was lost and **retransmits** the packet.",
        },
        {
          question:
            "Question 9: Suppose that the roundtrip delay between sender and receiver is constant and known to the sender. Would a timer still be necessary in protocol rdt 3.0, assuming that packets can be lost? Explain.",
          answer:
            "Yes, a timer would **still be necessary**.\n\nEven if the roundtrip delay is constant and perfectly known, packets can still be lost in the network (e.g., due to router buffer overflow or link errors). If a packet is lost, the receiver will never receive it and therefore will never send an ACK.\n\nWithout a timer, the sender would send a packet and wait for an ACK. If the packet is lost, the sender would wait forever, and the protocol would deadlock. The timer is essential to detect that an expected ACK has not arrived within the known roundtrip time, prompting the sender to retransmit the lost packet. The known roundtrip delay simply allows the sender to set the timer value very precisely, avoiding premature timeouts, but it doesn't eliminate the need for the timer itself.",
        },
        {
          question: "Question 10 & 11: (Java applet questions)",
          answer:
            "*(Note: The assignment asks to interact with Java applets which cannot be done here, but the underlying concepts are Go-Back-N and Selective Repeat).*\n\n**Brief explanation of Go-Back-N (GBN) vs. Selective Repeat (SR):**\n*   **Go-Back-N:** The sender can transmit multiple packets without waiting for an ACK, up to a certain window size (N). The receiver only sends cumulative ACKs (acknowledging the highest in-order packet received). If a packet is lost, the receiver discards all subsequent out-of-order packets. When the sender's timer expires for the lost packet, it must retransmit that lost packet and *all* subsequent packets that were previously sent in the window (it \"goes back N\").\n*   **Selective Repeat:** The sender can also transmit multiple packets up to a window size. However, the receiver acknowledges each packet individually. If a packet is lost, the receiver buffers subsequent out-of-order packets. When the sender's timer expires for the lost packet, it only retransmits that specific lost packet, not the entire window.",
        },
        {
          question:
            "Question 12: UDP and TCP use 1s complement for their checksums. Suppose you have the following three 8-bit bytes: 01010011, 01100110, 01110100. What is the 1s complement of the sum of these 8-bit bytes? (Note that although UDP and TCP use 16-bit words in computing the checksum, for this problem you are being asked to consider 8-bit sums.) Show all work. Why is it that UDP takes the 1s complement of the sum; that is, why not just use the sum? With the 1s complement scheme, how does the receiver detect errors? Is it possible that a 1-bit error will go undetected? How about a 2-bit error?",
          answer:
            "**Calculation:**\nLet's add the three 8-bit bytes:\nByte 1: `01010011`\nByte 2: `01100110`\nByte 3: `01110100`\n\nFirst, add Byte 1 and Byte 2:\n  `01010011`\n+ `01100110`\n-----------\n  `10111001`\n\nNow, add the result to Byte 3:\n  `10111001`\n+ `01110100`\n-----------\n `100101101`\n\nNotice that the sum resulted in a 9-bit number (a carry out of the most significant bit). In 1s complement arithmetic, any carry out from the most significant bit must be added back to the least significant bit (this is called end-around carry).\n\n  `00101101` (the 8 bits)\n+ `       1` (the carry bit)\n-----------\n  `00101110` (This is the sum)\n\nNow, find the 1s complement of the sum (flip all bits: 0s become 1s, 1s become 0s):\nSum: `00101110`\n1s Complement: **`11010001`**\n\n**Why use 1s complement instead of just the sum?**\nUsing the 1s complement makes error checking at the receiver very simple and efficient. The receiver adds all the received data words *including* the checksum word. If there are no errors, the sum of the data words will be the exact opposite of the checksum word. Therefore, adding them together will result in a word consisting entirely of 1s (e.g., `11111111`). It is computationally very fast for hardware to check if a value is all 1s.\n\n**How does the receiver detect errors?**\nThe receiver adds all the received 8-bit words (the data and the checksum) using 1s complement arithmetic. If the final result contains any 0s, an error has been detected. If the result is all 1s, the receiver assumes no error occurred.\n\n**Is it possible that a 1-bit error will go undetected?**\nNo. A 1-bit error will change the sum, and therefore the final addition at the receiver will not result in all 1s. A 1-bit error is always detected by this checksum method.\n\n**How about a 2-bit error?**\nYes, it is possible for a 2-bit error to go undetected. If one bit in a word flips from 0 to 1, and a bit in the same position in another word flips from 1 to 0, the overall sum remains exactly the same. The checksum will appear valid, but the data is corrupted.",
        },
        {
          question:
            "Question 13: Suppose that the UDP receiver computes the Internet checksum for the received UDP segment and finds that it matches the value carried in the checksum field. Can the receiver be absolutely certain that no bit errors have occurred? Explain.",
          answer:
            "No, the receiver **cannot be absolutely certain** that no bit errors have occurred.\n\nThe Internet checksum is a relatively weak error-detection mechanism. As explained in the previous answer, it is susceptible to undetected errors if multiple bits flip in a way that cancels each other out. For example, if a bit in one 16-bit word of the segment changes from a 0 to a 1, and the corresponding bit in another 16-bit word changes from a 1 to a 0, the sum of the words will remain identical. The computed checksum will match the received checksum, but the data will contain errors. Therefore, a matching checksum provides a high probability that the data is correct, but not absolute certainty.",
        },
        {
          question:
            "Question 14: In protocol rdt3.0, the ACK packets flowing from the receiver to the sender do not have sequence numbers (although they do have an ACK field that contains the sequence number of the packet they are acknowledging). Why is it that our ACK packets do not require sequence numbers?",
          answer:
            "In rdt 3.0 (which is a stop-and-wait protocol), the sender transmits one packet and waits for an ACK before sending the next packet.\n\nBecause it is a stop-and-wait protocol, there is only ever **one unacknowledged packet in flight** at any given time. The sender is either waiting for an ACK for packet 0 or an ACK for packet 1.\n\nWhen the sender receives an ACK, it only needs to know *which* packet is being acknowledged (which is indicated by the ACK field containing the sequence number of the received packet, e.g., ACK0 or ACK1). The sender does not need to distinguish between different instances of the *same* ACK (e.g., it doesn't need to know if this is the first ACK0 or a retransmitted ACK0). If it receives an ACK for the packet it is currently waiting for, it moves on. If it receives a duplicate ACK (e.g., it's waiting for ACK1 but receives ACK0), it simply ignores it. Therefore, the ACK packets themselves do not need their own separate sequence numbers to order them; the sequence number of the data packet they are acknowledging is sufficient.\n\n---",
        },
      ],
    },
    {
      id: 4,
      title: "Section 4: Network Layer",
      items: [
        {
          question:
            "Question 1: Let's review some of the terminology used in this manual. Recall that the name of a transport-layer packet is segment and that the name of a link-layer packet is frame. What is the name of a network-layer packet? Recall that both routers and link-layer switches are called packet switches. What is the fundamental difference between a router and link-layer switch?",
          answer:
            "*   The name of a network-layer packet is a **datagram**.\n*   **Fundamental difference between a router and a link-layer switch:**\n    *   A **router** operates at the **network layer (Layer 3)**. It forwards packets based on their **network-layer addresses (IP addresses)**. Routers connect different networks together and are responsible for routing packets across the Internet.\n    *   A **link-layer switch** operates at the **link layer (Layer 2)**. It forwards frames based on their **link-layer addresses (MAC addresses)**. Switches typically connect devices within the same local area network (LAN).",
        },
        {
          question:
            "Question 2: We made a distinction between the forwarding function and the routing function performed in the network layer. What are the key differences between routing and forwarding?",
          answer:
            "*   **Forwarding (Data Plane):** This is a **local, per-router action**. It involves moving a packet from a router's input link to the appropriate output link. It is a very fast process, typically implemented in hardware, that occurs on timescales of nanoseconds. It uses the forwarding table to make this decision.\n*   **Routing (Control Plane):** This is a **network-wide process**. It involves determining the end-to-end paths that packets take from source to destination across multiple routers. It is a slower process, typically implemented in software, that occurs on timescales of seconds. Routing algorithms create and update the forwarding tables used by the forwarding function.",
        },
        {
          question:
            "Question 3: What is the role of the forwarding table within a router?",
          answer:
            "The role of the forwarding table within a router is to provide the mapping between destination addresses and outgoing links. When a packet arrives at a router, the router extracts the destination IP address from the packet's header and uses it as an index to look up an entry in the forwarding table. The table tells the router which specific output link interface the packet should be forwarded onto to reach its destination (or the next hop towards its destination).",
        },
        {
          question:
            "Question 4: Compare and contrast the properties of a centralized and a distributed routing algorithm. Give an example of a routing protocol that takes a centralized and a decentralized approach.",
          answer:
            "*   **Centralized Routing Algorithm:**\n    *   **Properties:** Computes the least-cost path between source and destination using complete, global knowledge about the network. The algorithm has information about the connectivity and link costs of all nodes in the network before it starts calculating. This calculation can be done at a central site or replicated at every router.\n    *   **Example:** Algorithms with global state information are often referred to as **Link-State (LS)** algorithms. A common protocol using this approach is **OSPF (Open Shortest Path First)**.\n\n*   **Distributed (Decentralized) Routing Algorithm:**\n    *   **Properties:** The calculation of the least-cost path is carried out in an iterative, distributed manner. No single node has complete information about the costs of all network links. Instead, each node begins with only the knowledge of the costs of its own directly attached links. Through an iterative process of calculation and exchange of information with its immediate neighbors, a node gradually calculates the least-cost path to a destination or set of destinations.\n    *   **Example:** These are often referred to as **Distance-Vector (DV)** algorithms. A common protocol using this approach is **RIP (Routing Information Protocol)** or **BGP (Border Gateway Protocol)**.",
        },
        {
          question:
            "Question 5: Compare and contrast link-state and distance-vector routing algorithms.",
          answer:
            '| Feature | Link-State (LS) Algorithm | Distance-Vector (DV) Algorithm |\n| :--- | :--- | :--- |\n| **Knowledge** | Global knowledge. Every node has a complete map of the network topology and all link costs. | Local knowledge. Nodes only know the costs to their immediate neighbors and the distance estimates provided by those neighbors. |\n| **Information Exchanged** | Nodes broadcast link-state packets (LSPs) containing the identities and costs of their *directly connected* links to *all* other nodes in the network. | Nodes exchange their distance vectors (their estimates of the shortest path to all other nodes) only with their *immediate neighbors*. |\n| **Calculation** | Each node independently runs Dijkstra\'s algorithm on its complete map to find the shortest paths. | Nodes use the Bellman-Ford equation to iteratively update their distance estimates based on information received from neighbors. |\n| **Convergence Speed** | Generally faster convergence. When a link changes, the information is quickly flooded to all nodes. | Slower convergence. Can suffer from routing loops and the "count-to-infinity" problem. |\n| **Message Complexity** | High. Requires broadcasting information to the entire network. | Low. Information is only exchanged between neighbors. |',
        },
        {
          question:
            "Question 6: Consider the following network. With the indicated link costs, use Dijkstra's shortest-path algorithm to compute the shortest path from v to all network nodes. Show your solutions. (Diagram provided in PDF).",
          answer:
            "*(Based on the network diagram provided in the PDF, we will compute the shortest paths from node **v** to all other nodes: u, w, x, y, z, t)*\n\n**Initialization:**\n*   Start node: **v**\n*   N' (set of nodes whose shortest path is known) = {v}\n*   D(n) = current value of cost of path from source to dest n\n*   p(n) = predecessor node along path from source to n\n\nInitial distances from v:\n*   D(u) = 4, p(u) = v\n*   D(w) = 4, p(w) = v\n*   D(x) = 3, p(x) = v\n*   D(y) = 8, p(y) = v\n*   D(z) = infinity\n*   D(t) = infinity\n\n**Iteration 1:**\n*   Find node w not in N' such that D(w) is a minimum.\n*   Minimum distance is D(x) = 3.\n*   Add **x** to N'. N' = {v, x}\n*   Update D(n) for all nodes adjacent to x and not in N':\n    *   D(w) = min(D(w), D(x) + c(x,w)) = min(4, 3 + 6) = 4. (No change)\n    *   D(y) = min(D(y), D(x) + c(x,y)) = min(8, 3 + 6) = 8. (No change)\n    *   D(z) = min(D(z), D(x) + c(x,z)) = min(infinity, 3 + 8) = 11. p(z) = x.\n\n**Iteration 2:**\n*   Find node not in N' with minimum D(n).\n*   Minimum distance is D(u) = 4 and D(w) = 4. Let's pick **u**.\n*   Add **u** to N'. N' = {v, x, u}\n*   Update D(n) for all nodes adjacent to u and not in N':\n    *   D(w) = min(D(w), D(u) + c(u,w)) = min(4, 4 + 3) = 4. (No change)\n    *   D(t) = min(D(t), D(u) + c(u,t)) = min(infinity, 4 + 2) = 6. p(t) = u.\n\n**Iteration 3:**\n*   Find node not in N' with minimum D(n).\n*   Minimum distance is D(w) = 4.\n*   Add **w** to N'. N' = {v, x, u, w}\n*   Update D(n) for all nodes adjacent to w and not in N':\n    *   D(y) = min(D(y), D(w) + c(w,y)) = min(8, 4 + 8) = 8. (No change)\n\n**Iteration 4:**\n*   Find node not in N' with minimum D(n).\n*   Minimum distance is D(t) = 6.\n*   Add **t** to N'. N' = {v, x, u, w, t}\n*   Update D(n) for all nodes adjacent to t and not in N':\n    *   D(y) = min(D(y), D(t) + c(t,y)) = min(8, 6 + 7) = 8. (No change)\n\n**Iteration 5:**\n*   Find node not in N' with minimum D(n).\n*   Minimum distance is D(y) = 8.\n*   Add **y** to N'. N' = {v, x, u, w, t, y}\n*   Update D(n) for all nodes adjacent to y and not in N':\n    *   D(z) = min(D(z), D(y) + c(y,z)) = min(11, 8 + 12) = 11. (No change)\n\n**Iteration 6:**\n*   Find node not in N' with minimum D(n).\n*   Minimum distance is D(z) = 11.\n*   Add **z** to N'. N' = {v, x, u, w, t, y, z}\n\n**Final Shortest Paths from v:**\n*   **To u:** Path: v -> u, Cost: 4\n*   **To w:** Path: v -> w, Cost: 4\n*   **To x:** Path: v -> x, Cost: 3\n*   **To y:** Path: v -> y, Cost: 8\n*   **To z:** Path: v -> x -> z, Cost: 11\n*   **To t:** Path: v -> u -> t, Cost: 6",
        },
      ],
    },
  ];

  const toggleExpand = (setIdx: number, itemIdx: number) => {
    const key = `${setIdx}-${itemIdx}`;
    setExpandedKeys((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div
      className="assignment-container"
      style={{ color: "white", paddingBottom: "100px" }}
    >
      <header style={{ marginBottom: "2rem" }}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "0.5rem",
          }}
        >
          <FileEdit color="var(--primary)" size={28} />
          <h1 style={{ fontSize: "2.2rem", fontWeight: 800 }}>
            Assignment Solutions
          </h1>
        </motion.div>
        <p style={{ opacity: 0.6, fontSize: "1.1rem" }}>
          Master Computer Networks through stacked sets and verified solutions.
        </p>
      </header>

      {/* Search bar */}
      <div
        style={{
          position: "sticky",
          top: "10px",
          zIndex: 10,
          marginBottom: "3rem",
        }}
      >
        <input
          type="text"
          placeholder="Search across all sets..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: "100%",
            padding: "1.2rem 1.2rem 1.2rem 3.5rem",
            background: "rgba(10, 10, 10, 0.8)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "18px",
            color: "white",
            fontSize: "1.05rem",
            outline: "none",
            boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
          }}
        />
        <Search
          style={{
            position: "absolute",
            left: "1.2rem",
            top: "50%",
            transform: "translateY(-50%)",
            opacity: 0.4,
          }}
          size={20}
        />
      </div>

      {/* Stacked Sets List */}
      <div style={{ display: "grid", gap: "4rem" }}>
        {assignmentSets.map((set, setIdx) => {
          const filteredItems = set.items.filter(
            (item) =>
              item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
              item.answer.toLowerCase().includes(searchTerm.toLowerCase()),
          );

          if (searchTerm && filteredItems.length === 0) return null;

          return (
            <motion.section
              key={set.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  marginBottom: "1.5rem",
                  color: "var(--primary)",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <div
                  style={{
                    width: "20px",
                    height: "4px",
                    background: "var(--primary)",
                    borderRadius: "2px",
                  }}
                />
                {set.title}
              </h2>

              <div style={{ display: "grid", gap: "1rem" }}>
                {filteredItems.map((item, itemIdx) => {
                  const isExpanded = expandedKeys[`${setIdx}-${itemIdx}`];
                  return (
                    <div
                      key={itemIdx}
                      style={{
                        background: "rgba(255,255,255,0.03)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        borderRadius: "20px",
                        overflow: "hidden",
                      }}
                    >
                      <div
                        onClick={() => toggleExpand(setIdx, itemIdx)}
                        style={{
                          padding: "1.5rem",
                          cursor: "pointer",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          gap: "1.5rem",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            gap: "1rem",
                            alignItems: "flex-start",
                          }}
                        >
                          <div
                            style={{
                              marginTop: "3px",
                              padding: "4px",
                              background: "rgba(240, 10, 4, 0.1)",
                              borderRadius: "8px",
                              color: "var(--primary)",
                            }}
                          >
                            <BookOpen size={16} />
                          </div>
                          <h3
                            style={{
                              fontSize: "1.1rem",
                              fontWeight: 600,
                              lineHeight: 1.4,
                            }}
                          >
                            {item.question}
                          </h3>
                        </div>
                        {isExpanded ? (
                          <ChevronUp opacity={0.5} />
                        ) : (
                          <ChevronDown opacity={0.5} />
                        )}
                      </div>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                          >
                            <div
                              style={{
                                padding: "0 1.5rem 1.5rem 4rem",
                                color: "rgba(255,255,255,0.7)",
                                lineHeight: 1.6,
                                fontSize: "1rem",
                                borderTop: "1px solid rgba(255,255,255,0.05)",
                                paddingTop: "1.5rem",
                              }}
                            >
                              <div
                                style={{
                                  display: "flex",
                                  gap: "10px",
                                  color: "var(--primary)",
                                  fontWeight: 700,
                                  marginBottom: "0.8rem",
                                  fontSize: "0.85rem",
                                  textTransform: "uppercase",
                                }}
                              >
                                <Info size={14} /> Solution
                              </div>
                              <div style={{ whiteSpace: "pre-wrap" }}>
                                {(() => {
                                  const text = item.answer;
                                  const parts = text.split(/(\*\*.*?\*\*)/g);
                                  return parts.map((part, i) => {
                                    if (
                                      part.startsWith("**") &&
                                      part.endsWith("**")
                                    ) {
                                      return (
                                        <strong
                                          key={i}
                                          style={{
                                            color: "white",
                                            fontWeight: 800,
                                          }}
                                        >
                                          {part.slice(2, -2)}
                                        </strong>
                                      );
                                    }
                                    return part;
                                  });
                                })()}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </motion.section>
          );
        })}
      </div>
    </div>
  );
};

export default Assignment;
