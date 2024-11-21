import React, { useState, useEffect } from "react";
import "./dashboard.css";
import {
  Container,
  Typography,
  Tabs,
  Tab,
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import VisibilityIcon from "@mui/icons-material/Visibility";
import RefreshIcon from "@mui/icons-material/Refresh";
import * as XLSX from "xlsx";

const StyledContainer = styled(Container)(({ theme }) => ({
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "20px",
  color: "white",
  backgroundColor: "transparent",
}));

const StyledHeader = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

const StyledTabs = styled(Tabs)({
  "& .MuiTabs-indicator": {
    backgroundColor: "#FFDE91",
  },
  "& .Mui-selected": {
    color: "#FFDE91 !important",
  },
});

const StyledTab = styled(Tab)({
  color: "white",
  "&:hover": {
    color: "#FFDE91",
  },
});

const ChartItem = styled(Box)(({ theme }) => ({
  background: "rgba(255, 255, 255, 0.05)",
  backdropFilter: "blur(7.5px)",
  WebkitBackdropFilter: "blur(7.5px)",
  borderRadius: "10px",
  border: "1px solid rgba(255, 255, 255, 0.18)",
  padding: "20px",
  transition: "all 0.2s ease",
  marginBottom: "20px",
}));

const StyledDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialog-paper": {
    background: "rgba(255, 255, 255, 0.05)",
    backdropFilter: "blur(7.5px)",
    WebkitBackdropFilter: "blur(7.5px)",
    color: "white",
    borderRadius: "10px",
    border: "1px solid rgba(255, 255, 255, 0.18)",
    maxWidth: "90%",
    width: "90%",
  },
}));

const StyledTableCell = styled(TableCell)({
  color: "white",
  borderBottomColor: "rgba(255, 255, 255, 0.2)",
});

const StyledTableRow = styled(TableRow)({
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
});

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [surveyData, setSurveyData] = useState([]);
  const [ticketData, setTicketData] = useState([]);
  const [eventsData, setEventsData] = useState([]);
  const [loading, setLoading] = useState({
    survey: true,
    ticket: true,
    events: true,
  });
  const [error, setError] = useState({
    survey: null,
    ticket: null,
    events: null,
  });
  const [openDialog, setOpenDialog] = useState(false);
  const [currentDetails, setCurrentDetails] = useState(null);

  const fetchData = async () => {
    try {
      // Survey Data
      const surveyResponse = await fetch("https://acmback.onrender.com/forms/");
      if (!surveyResponse.ok) throw new Error("Survey data fetch failed");
      const surveyDataResponse = await surveyResponse.json();
      setSurveyData(surveyDataResponse);
      setLoading((prev) => ({ ...prev, survey: false }));

      // Ticket Data
      const ticketResponse = await fetch(
        "https://acmback.onrender.com/tickets/"
      );
      if (!ticketResponse.ok) throw new Error("Ticket data fetch failed");
      const ticketDataResponse = await ticketResponse.json();
      setTicketData(ticketDataResponse);
      console.log(ticketData);
      setLoading((prev) => ({ ...prev, ticket: false }));

      // Events Data
      const eventsResponse = await fetch(
        "https://acmback.onrender.com/events/?exclude=image"
      );
      if (!eventsResponse.ok) throw new Error("Events data fetch failed");
      const eventsDataResponse = await eventsResponse.json();
      setEventsData(
        eventsDataResponse.map(({ image, ...eventDetails }) => eventDetails)
      );
      setLoading((prev) => ({ ...prev, events: false }));
    } catch (err) {
      console.error("Data fetch error:", err);
      setError((prev) => ({
        survey: err.message,
        ticket: err.message,
        events: err.message,
      }));
      setLoading({ survey: false, ticket: false, events: false });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const downloadExcel = (data, name) => {
    const workbook = XLSX.utils.book_new();

    const worksheet = XLSX.utils.json_to_sheet(data);

    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

    XLSX.writeFile(workbook, `${name}.xlsx`);
  };

  const handleOpenDetails = (details) => {
    setCurrentDetails(details);
    setOpenDialog(true);
  };

  const renderSurveyDetails = () => {
    if (loading.survey) return <Typography>Loading Survey Data...</Typography>;
    if (error.survey)
      return <Typography color="error">Error: {error.survey}</Typography>;

    return (
      <ChartItem>
        <Typography
          variant="h6"
          gutterBottom
          sx={{
            fontFamily: "Poppins, sans-serif",
          }}
        >
          Survey Overview
        </Typography>
        <TableContainer
          component={Paper}
          sx={{ backgroundColor: "transparent" }}
        >
          <Table>
            <TableHead>
              <StyledTableRow>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell>State</StyledTableCell>
                <StyledTableCell>District</StyledTableCell>
                <StyledTableCell>Actions</StyledTableCell>
              </StyledTableRow>
            </TableHead>
            <TableBody>
              {surveyData.slice(0, 5).map((survey, index) => (
                <StyledTableRow key={index}>
                  <StyledTableCell>{survey.name}</StyledTableCell>
                  <StyledTableCell>{survey.state}</StyledTableCell>
                  <StyledTableCell>{survey.district}</StyledTableCell>
                  <StyledTableCell>
                    <Button
                      startIcon={<VisibilityIcon />}
                      onClick={() => handleOpenDetails(survey)}
                      size="small"
                      variant="outlined"
                      color="info"
                    >
                      View
                    </Button>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
          <Typography>Total Surveys: {surveyData.length}</Typography>
          <Button
            startIcon={<RefreshIcon />}
            onClick={fetchData}
            variant="outlined"
            color="green"
          >
            Refresh Data
          </Button>
          <Button
            onClick={() => {
              downloadExcel(surveyData, "SurveyDetails");
            }}
            variant="outlined"
            color="green"
          >
            Download Data
          </Button>
        </Box>
      </ChartItem>
    );
  };

  const renderTicketDetails = () => {
    if (loading.ticket) return <Typography>Loading Ticket Data...</Typography>;
    if (error.ticket)
      return <Typography color="error">Error: {error.ticket}</Typography>;

    return (
      <ChartItem>
        <Typography variant="h6" gutterBottom>
          Ticket Summary
        </Typography>
        <TableContainer
          component={Paper}
          sx={{ backgroundColor: "transparent" }}
        >
          <Table>
            <TableHead>
              <StyledTableRow>
                <StyledTableCell>Temple Name</StyledTableCell>
                <StyledTableCell>Full Name</StyledTableCell>
                <StyledTableCell>Date</StyledTableCell>
                <StyledTableCell>Actions</StyledTableCell>
              </StyledTableRow>
            </TableHead>
            <TableBody>
              {ticketData.slice(0, 5).map((ticket, index) => (
                <StyledTableRow key={index}>
                  <StyledTableCell>{ticket.temple}</StyledTableCell>
                  <StyledTableCell>{ticket.fullName}</StyledTableCell>
                  <StyledTableCell>{ticket.date}</StyledTableCell>
                  <StyledTableCell>
                    <Button
                      startIcon={<VisibilityIcon />}
                      onClick={() => handleOpenDetails(ticket)}
                      size="small"
                      variant="outlined"
                      color="info"
                    >
                      View
                    </Button>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
          <Typography>Total Tickets: {ticketData.length}</Typography>
          <Button
            startIcon={<RefreshIcon />}
            onClick={fetchData}
            variant="outlined"
            color="green"
          >
            Refresh Data
          </Button>
          <Button
            onClick={() => {
              downloadExcel(ticketData, "Ticket Details");
            }}
            variant="outlined"
            color="green"
          >
            Download Data
          </Button>
        </Box>
      </ChartItem>
    );
  };

  const renderEventDetails = () => {
    if (loading.events) return <Typography>Loading Event Data...</Typography>;
    if (error.events)
      return <Typography color="error">Error: {error.events}</Typography>;

    return (
      <ChartItem>
        <Typography variant="h6" gutterBottom>
          Event Details
        </Typography>
        <TableContainer
          component={Paper}
          sx={{ backgroundColor: "transparent" }}
        >
          <Table>
            <TableHead>
              <StyledTableRow>
                <StyledTableCell>Event Name</StyledTableCell>
                <StyledTableCell>Date</StyledTableCell>
                <StyledTableCell>Location</StyledTableCell>
                <StyledTableCell>Actions</StyledTableCell>
              </StyledTableRow>
            </TableHead>
            <TableBody>
              {eventsData.slice(0, 5).map((event, index) => (
                <StyledTableRow key={index}>
                  <StyledTableCell>{event.eventName}</StyledTableCell>
                  <StyledTableCell>{event.eventDate}</StyledTableCell>
                  <StyledTableCell>{event.eventLocation}</StyledTableCell>
                  <StyledTableCell>
                    <Button
                      startIcon={<VisibilityIcon />}
                      onClick={() => handleOpenDetails(event)}
                      size="small"
                      variant="outlined"
                      color="info"
                    >
                      View
                    </Button>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
          <Typography>Total Events: {eventsData.length}</Typography>
          <Button
            startIcon={<RefreshIcon />}
            onClick={fetchData}
            variant="outlined"
            color="green"
          >
            Refresh Data
          </Button>
          <Button
            onClick={() => {
              downloadExcel(eventsData, "Events Details");
            }}
            variant="outlined"
            color="green"
          >
            Download Data
          </Button>
        </Box>
      </ChartItem>
    );
  };

  const renderDetailsDialog = () => {
    return (
      <StyledDialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>Complete Details</DialogTitle>
        <DialogContent>
          {currentDetails && (
            <TableContainer>
              <Table>
                <TableBody>
                  {Object.entries(currentDetails).map(([key, value]) => (
                    <StyledTableRow key={key}>
                      <StyledTableCell>{key}</StyledTableCell>
                      <StyledTableCell>
                        {value?.toString() || "N/A"}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </DialogContent>
      </StyledDialog>
    );
  };

  return (
    <StyledContainer>
      <StyledHeader>
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontFamily: "Poppins, sans-serif",
          }}
        >
          Village Survey Dashboard
        </Typography>
        <svg
          width="300"
          height="35"
          viewBox="0 0 462 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="logo-icon"
        >
          <path
            d="M1 20C260.2 -5.6 415.667 4.66667 461 13M55 32C314.2 6.4 388.667 4.66667 434 13"
            stroke="#FFDE91"
            strokeWidth="6"
          />
        </svg>
      </StyledHeader>

      <StyledTabs value={activeTab} onChange={handleTabChange} centered>
        <StyledTab label="Survey Overview" />
        <StyledTab label="Ticket Summary" />
        <StyledTab label="Event Details" />
      </StyledTabs>

      <Box sx={{ mt: 3 }}>
        {activeTab === 0 && renderSurveyDetails()}
        {activeTab === 1 && renderTicketDetails()}
        {activeTab === 2 && renderEventDetails()}
      </Box>

      {renderDetailsDialog()}
    </StyledContainer>
  );
};

export default Dashboard;
