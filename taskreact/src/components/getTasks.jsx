import axios from 'axios';
import { useState, useEffect } from 'react';

function getTasks(endpoint) {
  axios.get(endpoint).then((r) => {
    setTasks(r.data);
  });
}
