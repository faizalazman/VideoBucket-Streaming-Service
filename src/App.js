import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import StreamCreate from "./components/StreamCreate";
import StreamEdit from "./components/StreamEdit";
import StreamDelete from "./components/StreamDelete";
import StreamList from "./components/StreamList";
import StreamShow from "./components/StreamShow";
import Header from "./Header";

export default function App() {
  return (
    <div className="ui container">
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new" exact component={StreamCreate} />
          <Route path="/streams/edit" exact component={StreamEdit} />
          <Route path="/streams/delete" exact component={StreamDelete} />
          <Route path="/streams/show" exact component={StreamShow} />
        </div>
      </BrowserRouter>
    </div>
  );
}
