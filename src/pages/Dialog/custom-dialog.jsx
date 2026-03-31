import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Button from "@mui/material/Button";
import SearchIcon from '@mui/icons-material/Search';

export default function SearchDialog() {
  const [open, setOpen] = React.useState(false);
  const [search, setSearch] = React.useState("");

  const items = ["Delhi", "Mumbai", "Chennai", "Bangalore", "Hyderabad"];

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Button variant="outlined" onClick={() => setOpen(true)}>
       Select a Location
      </Button>

      <Dialog open={open} onClose={() => setOpen(false)} fullWidth>
        <DialogTitle>Choose your Delivery Location</DialogTitle>
        <p>Enter your address and we will specify the offer for your area.</p>

        <DialogContent>
          <TextField
            fullWidth
            placeholder="Search your area"
            variant="outlined"
            margin="dense"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <List>
            {filteredItems.map((item) => (
              <ListItem key={item} disablePadding>
                <ListItemButton onClick={() => setOpen(false)}>
                  {item}
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </DialogContent>
      </Dialog>
    </div>
  );
}