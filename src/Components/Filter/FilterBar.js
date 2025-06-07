import {
  Box,
  Typography,
  Checkbox,
  FormControl,
  FormLabel,
  Button,
  Select,
} from "@mui/joy";
import Option from '@mui/joy/Option';

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
      }}
    >
      {/* Category Filter */}
      <FormControl size="sm">
        <FormLabel>Category</FormLabel>
        <Box>
          <Checkbox label="Whey Protein" />
          <Checkbox label="weight Gainer" />
        </Box>
      </FormControl>

      {/* Price Filter */}


      <FormControl size="sm" sx={{ minWidth: 200 }}>
        <FormLabel>Flaver</FormLabel>
        <Select>
          <Option value="dog">Dog</Option>
          <Option value="cat">Cat</Option>
          <Option value="fish">Fish</Option>
          <Option value="bird">Bird</Option>
        </Select>
      </FormControl>
          <FormControl size="sm" sx={{ minWidth: 200 }}>
        <FormLabel>Flaver</FormLabel>
    <Button>Filter</Button>
      </FormControl>
    </Box>
  );
};
export default FilterBar;
