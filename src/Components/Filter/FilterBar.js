import {
  Box,
  Typography,
  Checkbox,
  FormControl,
  FormLabel,
  Button,
  Select,
} from "@mui/joy";
import Option from "@mui/joy/Option";
import { isMobile, isTablet, isBrowser } from "react-device-detect";
import flavourlist from "../../Utility/FlavouList";

const FilterBar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 3,
        padding: 2,
        border: "1px solid #ddd",
        borderRadius: "8px",
        marginBottom: 3,
        backgroundColor: "#fafafa",
        // width:"100%"
      }}
    >
      {/* Category Filter List */}
      {!isMobile ? (
        <FormControl
          sx={{
            width: "auto",
          }}
        >
          <FormLabel>Category</FormLabel>
          <Box>
            <Checkbox label="Whey Protein" />
            <Checkbox label="weight Gainer" />
          </Box>
        </FormControl>
      ) : (
        <FormControl
          size={isMobile ? "sm" : ""}
          sx={{
            width: "45%",
          }}
        >
          <FormLabel>Category</FormLabel>
          <Select>
            <Option value="whey-protein">Whey Protein</Option>
            <Option value="protein-gainer">Protein Gainer</Option>
          </Select>
        </FormControl>
      )}

      {/* Price Filter */}

      <FormControl
        size={isMobile ? "sm" : ""}
        sx={{
          width: isMobile ? "45%" : "auto",
          minWidth: isMobile ? "45%" : 200,
        }}
      >
        <FormLabel>Flavour</FormLabel>
        <Select sx={{ height: isMobile ? "auto" : "38px" }}>
          {Object.entries(flavourlist).map(([key, value]) => {
            return <Option value="dog">{value.name}</Option>;
          })}
        </Select>
      </FormControl>

      <FormControl
        size={isMobile ? "sm" : ""}
        sx={{ width: isMobile ? "100%" : "200px" }}
      >
        {!isMobile && (
          <FormLabel>
            <div style={{ visibility: "hidden" }}>{"dasds"}</div>
          </FormLabel>
        )}
        <Button>Filter</Button>
      </FormControl>
    </Box>
  );
};
export default FilterBar;
