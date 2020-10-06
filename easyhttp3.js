class EasyHTTP {
  // make an http get request
  async get(url) {
    const response = await fetch(url);

    const resData = await response.json();

    return resData;
  }

  // make an http post request
  async post(url, data) {

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    const resData = await response.json();

    return resData;    
  }

  // make an http PUT request
  async put(url, data) {

    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    const resData = await response.json();

    return resData;
  }

  // make an http delete request
  async delete(url) {
    
      const response = await fetch(url, {
        method: 'DELETE',
        headers: {
          "Content-type": "application/json"
        }
      })

      const resData = await 'Data deleted . . .';
      return resData;
  }
}


























function easyHTTP() {
  this.http = new XMLHttpRequest();
}

// Make an http GET Request
easyHTTP.prototype.get = function(url, callback) {
  this.http.open('GET', url, true);

  let self = this;
  this.http.onload = function() {
    if(self.http.status === 200) {
      callback(null, self.http.responseText);
    } else {
      callback('Error:' + self.http.status);
    }
  }

  this.http.send();
}

// Make an http POST Request
easyHTTP.prototype.post =  function(url, data, callback) {
  this.http.open('POST', url, true);

  this.http.setRequestHeader('Content-type', 'application/json');

  let self = this;
  this.http.onload = function() {
    callback(null, self.http.responseText);
  }
  
  this.http.send(JSON.stringify(data));
}

// Make an http PUT Request
easyHTTP.prototype.put = function(url, data, callback) {
  this.http.open('PUT', url, true);
  this.http.setRequestHeader('Content-type', 'application/json');

  let self = this;
  this.http.onload = function() {
    callback(null, self.http.responseText);    
  }

  this.http.send(JSON.stringify(data));
}

// Make an http DELETE Request
easyHTTP.prototype.delete = function(url, callback) {
  this.http.open('DELETE', url, true);

  let self =  this;
  this.http.onload = function() {
    if(self.http.status = 200) {
      callback(null, 'Post deleted');
    } else {
      callback('Error: ' + self.http.status);
    }
  }

  this.http.send();
}