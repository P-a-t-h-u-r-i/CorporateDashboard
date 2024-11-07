import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import '../index.css'; // Correct import for CSS file

// Tab Panel Component
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
        <Box className="vertical-tab-panel">
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  };
}

export default function DomainSelection() {
  const [horizontalValue, setHorizontalValue] = React.useState(0);
  const [verticalValue, setVerticalValue] = React.useState(0);

  const handleHorizontalChange = (event, newValue) => {
    setHorizontalValue(newValue);
    setVerticalValue(0); // Reset vertical tab selection when changing horizontal tab
  };

  const handleVerticalChange = (event, newValue) => {
    setVerticalValue(newValue);
  };

  // Content for each vertical tab based on the selected horizontal tab
  const verticalTabContent = [
    ["Full Stack Developer", "Backend Engineer", "Frontend Engineer"],
    ["Support Role", "Customer Success", "Technical Support"],
    ["Data Entry", "Document Control", "Operations"]
  ];

  return (
    <Box className="domain-selection-container">
      {/* Horizontal Tabs */}
      <Box className="horizontal-tabs">
        <Tabs 
          value={horizontalValue} 
          onChange={handleHorizontalChange} 
          aria-label="domain selection tabs"
          centered
          variant="fullWidth"
        >
          <Tab label="Technical" {...a11yProps(0)} />
          <Tab label="Non-Technical" {...a11yProps(1)} />
          <Tab label="Non-IT" {...a11yProps(2)} />
        </Tabs>
      </Box>

      {/* Vertical Tabs and Content Display */}
      {verticalTabContent.map((contentArray, horizontalIndex) => (
        <TabPanel value={horizontalValue} index={horizontalIndex} key={horizontalIndex}>
          <Box className="vertical-tabs-container">
            <Tabs
              orientation="vertical"
              variant="scrollable"
              value={verticalValue}
              onChange={handleVerticalChange}
              aria-label={`Vertical tabs for ${horizontalIndex}`}
              className="vertical-tabs"
            >
              {contentArray.map((label, verticalIndex) => (
                <Tab key={verticalIndex} label={label} {...a11yProps(verticalIndex)} />
              ))}
            </Tabs>
            <Box className="vertical-tab-panel">
              {contentArray.map((content, verticalIndex) => (
                <TabPanel value={verticalValue} index={verticalIndex} key={verticalIndex}>
                  <Typography variant="h6" className="tab-panel-header">{content}</Typography>
                  <Typography variant="body1" className="tab-panel-content">
                    This section contains detailed information about the {content} role. Here you can add specific details relevant to this position.
                  </Typography>
                </TabPanel>
              ))}
            </Box>
          </Box>
        </TabPanel>
      ))}
    </Box>
  );
}
