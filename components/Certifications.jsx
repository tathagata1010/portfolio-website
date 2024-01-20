import { useState } from "react";
import CertificateCard from "./CertificateCard"; // Update the path accordingly
import { motion } from "framer-motion";
// import cordaIcon from "../public/assets/corda_business.webp";

const CertificationSection = () => {
  const [showMore, setShowMore] = useState(false);
  console.log("cordaIcon type:", typeof cordaIcon);

  return (
    <section id="certificates" className="max-w-contentContainer mx-auto px-4 py-24">
      <div className="w-full flex flex-col items-center">
        <h2 className="text-3xl font-titleFont font-semibold">
          Certifications
        </h2>
        <p className="text-sm font-titleFont text-textGreen">
          Explore my certifications
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
        <CertificateCard
          title="Corda For Business Professional"
          des="Earners of the Corda For Business Professional certification have a thorough understanding of the key DLT and Corda Concepts required to work as a business professional in this industry."
          listItem={["Basic of Software Architecture", "Blockchain", "Corda"]}
          link="https://www.credly.com/badges/dcb63de6-d3d4-49bc-99d2-9911ae52d777/"
          logoSrc={
            "https://r3certification.com/cdn/shop/products/corda-business-certified-developer.png?v=1639426258"
          }
        />
        <CertificateCard
          title="Corda Certified Developer"
          des="Earners of the Corda Certified Developer certification have a thorough understanding of the architecture of Corda and possess the development knowledge necessary to begin developing applications on Corda."
          listItem={[
            "Corda",
            "Architecture",
            "Blockchain",
            "Command Line",
            "Distributed Ledger",
            "Java",
            "OOP",
          ]}
          link="https://www.credly.com/badges/dd3ce531-3142-43ad-b5de-cee09005d298"
          logoSrc={
            "https://r3certification.com/cdn/shop/products/corda-certified-developer.png?v=1632754920"
          }
        />
        <CertificateCard
          title="IBM Blockchain Essentials V2r"
          des="This badge earner has developed an understanding of Blockchain principles and practices and how they can be applied within a business environment. They have an understanding of Blockchain and distributed ledger systems, the important concepts and key use cases of Blockchain and how assets can be transferred in a Blockchain network."
          listItem={[
            "Blockchain",
            "Distributed Ledger Technology",
            "Open Source",
          ]}
          link="https://learn.microsoft.com/api/achievements/share/en-us/TathagataNandi-2316/2C95LDVS?sharingId=38B25CD0E321DC7"
          logoSrc={
            "            data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAe1BMVEXWz8na080rKijc1c8AAAAnJiTe19EJCQchIR8YGBYUFBIdHBp5dnKknpnIwrzb1M09PDmXko5LSUe/ubNVU1CEgHyNiYRzb2zQycMREQ+yrKehnJdtamZjYF18eHSsp6FIR0Q5ODUwLy1YVlOxrKZBQD66ta5nY2CTjor5oBumAAAGAElEQVR4nO2YCXOjOBBGkYSEOIyCwRwGjPH9/3/htgT4yCTZ2traSab2ezVVg5BErOdWq7HnAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMD3wxj7u/6PB3zaQV3m62d+G8xY2P3KLEug5vOg+7V5GcZWq1X+1eOH1ery0dLdxE805puy/ofL+C2wbUufejWw5YqW4MSwvG2XT/x8nc6jVifPLtX4oX/7Ig7UOQo68VEHTSw/6iCiOCo+6fpWTO8HYeNz5YkqCHxHYcWwzA8qNQ86RH46XbKVH05EuiWrIuBx9pWstdTVh7JCHn8iKw045+pfLeu/geWXTVhdaKeIJNrYiGn34VpZWbEMUqdBZJFsFllDyLkmJOe+nfUfyDLjJ9H47TCRBRtFyxVJMAhKusLwgCywLOqj6/T96rEInmTpbpfs1pL+F0+yaKa4p2zbcIlwkWUTouswNMpeTLKoae4fZO4hhq3b4nYKe9z9ATCSZb9GK2taRt+0VlaQ9b5NwaL02+OzrChXRijO5Vk9ZIn8VlW3fAoIkVKjtI1ZFqNU1+Z2VEmjUjPLUquqaqfordukS7JaePdDoaYpqZdVyfbnRNkHsuwF3S5zv6DQqiOuildZNE7tpSwessSuibWOm517VBktjUkWqw9hcKbZlRsVZsLJyrpA6+ZIU0Qbh7S3w9jmQXWIgsqwnI6A7ZluT5/vR/AsS9lt6MmmdrdL1fsnJhK/VesXWalSypM8Ku/bUGwaruNY84aeRRubS9co2SxrreVIFqpwGuUPjGTJIggpAzYrxi4+dUhq2FhWb1InJCtyI2LO59z5A3jIogTftm125jbCrCyRBnuVBmf1KksWx+NxlLr37qchHWC6S9NOu4XRkGOa7proKJws1cVSpozlNKpK0z4Kd4Jk8bhNh5jrK23T0k/SekUubTQ+ZI3btIx5/FVx8lt5yNKNqxzijbfIUol/6vwte5XFpYV3uVpksVvMQ6pTDe2tm3LBZ5hK8mkbJgOFHUWMsOu21WySum2od4qpq7apzxMnimpVSGvuISukI0dJZ/Bn8BRZ5Xa7PQ2b4DBvQ+HV4RgflfdOVuzKLB3clm0oKs1HWrIaKXTUhuLLHqP2GCNZ8nqgsLNCZjFTx1Q6mETLN1upiPSyvRRS9s+yIjoV1VnqnfliAb+T55xlSwembkFnZlmiDAObRV5khds0XbbcLKuXcpYle5VQtlpqSpLFqSTjja3JyMX53vEiSwznsAkCGvvnyJoKpryRapblMRcT7xK8PQ3ZJaKcM8syFDNLZF3VbpY111lUxI5TmXGcZbmOZ1lsCKTeX7vxz5OVNvFDVmYt/SKL0pOVlS2RRTvPvqBQ8aU3Kot5Y3VuPeNkRe1A6ScTlBX5wW7HgZlXWTbmejpi+z9pG0714amh19hZljeVXq/bcKBdmPeaR6dJlmLbhhrKpvbmxFJ3j47Rw8bYBH9VtGAe12ywy1fq5I839iLLSrbZfm+d/WBZQrX0uiOeZOXnoDV3WY53CT6MCM3lgQKEdtl4UGqvue7Jn97TYo+20ZGAQsx11qmxOd6MlJS6K1l2pcOTLLtZ26Gi5MbX6sfKEsnbqA9nCiVRhQdHE1zd/vOfZd1/dRgaOaNDStqmpGzjK5byWNLbdcxt/ViPc6OmQl/H9LqjCi39k8jpLv0L9/TIRoZOVqxHxVY+hV7jXxqtyfyoYysrkI2V9WZb36TnFbNZFwRlClMWE33rtt9q//g1wXT7RdZ2PQ8rEldXi7Yv1pTi6t2b1m+72v2M6G2oMVbUEF1RbChOLzTtalhajTRq41n/xZr+ACunP97ShPVWnY7UEn1RlFTC0gh7hrrWd7j5FaEsVo9RE/NbPlPsedRyxZR6N46e4IZ4de0tsUhvg3ODes08TbyMohts6nDfDU2gcpUeJtwcNk1h3tICAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+F/xFyiaaZaKjMEGAAAAAElFTkSuQmCC"
          }
        />
        {/* Add more certification cards as needed */}
        {showMore && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <CertificateCard
                title="Microsoft Certified: Azure Fundamentals
              (AZ-900)"
                des="Demonstrate foundational level knowledge of cloud
              services and how those services are provided with Microsoft
              Azure."
                listItem={[
                  "CloudConcepts",
                  "CoreServices",
                  "AzureIdentity",
                  "SecurityPrivacy",
                ]}
                link="https://www.credly.com/badges/e3156cf4-d924-4d33-8141-42d94ad3834f/public_url"
                logoSrc={
                  "https://images.credly.com/images/be8fcaeb-c769-4858-b567-ffaaa73ce8cf/image.png"
                }
              />
            </motion.div>
            {/* Add more certification cards as needed */}
          </>
        )}
      </div>
      <div className="mt-12 flex items-center justify-center">
        {showMore ? (
          <button
            onClick={() => setShowMore(false)}
            className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
          >
            Show Less
          </button>
        ) : (
          <button
            onClick={() => setShowMore(true)}
            className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
          >
            Show More
          </button>
        )}
      </div>
    </section>
  );
};

export default CertificationSection;
