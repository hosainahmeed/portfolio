import SectionHeader from "../../../../Component/Utils/SectionHeader";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

// Data Array for Dynamic Content
const tabContent = [
  {
    label: "Introduction",
    content:
      "Farzana Houqe is a dedicated SEO professional based in Dhaka, with a passion for enhancing website visibility and driving organic growth.",
  },
  {
    label: "Education",
    content:
      "Currently studying at Dhaka University, Farzana is committed to expanding her knowledge in digital marketing.",
  },
  {
    label: "Experience",
    content:
      "Experienced in SEO optimization, content strategy, and analytics to help businesses improve their online presence.",
  },
  {
    label: "Hobbies",
    content:
      "Enjoys reading about the latest trends in digital marketing and spending time with family and friends.",
  },
  {
    label: "Goals",
    content:
      "Aspires to lead SEO projects for top-tier companies and help clients achieve substantial growth in search rankings.",
  },
  {
    label: "Contact",
    content:
      "Feel free to connect with Farzana on LinkedIn or visit her portfolio for more information.",
  },
];

function AboutMeSection() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <motion.div
      id="about-me"
      className="mb-28 flex flex-col items-center px-4 md:px-10"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <SectionHeader head="About Farzana Houqe" />
      <div className="flex flex-col md:flex-row items-start justify-between gap-6 w-full max-w-4xl">
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-1/2"
        >
          <img
            src="https://i.pinimg.com/564x/f4/2d/38/f42d384ae3532aa99bbd561fded9423f.jpg"
            alt="Farzana Houqe"
            className="rounded-lg  shadow-lg w-full h-auto"
          />
        </motion.div>

        <motion.div
          className="bg-white p-2 shadow-lg rounded-lg w-full md:w-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className="text-2xl font-semibold mb-4 text-gray-800">About Farzana</h1>
          <Box
            sx={{
              maxWidth: { xs: 320, sm: 900 },
              bgcolor: "background.paper",
              borderRadius: 2,
            }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
              aria-label="about farzana tabs"
            >
              {tabContent.map((tab, index) => (
                <Tab key={index} label={tab.label} />
              ))}
            </Tabs>

            {/* Tab Panels */}
            {tabContent.map((tab, index) => (
              <TabPanel key={index} value={value} index={index}>
                {tab.content}
              </TabPanel>
            ))}
          </Box>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default AboutMeSection;
