import React, { Component } from "react";

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: true,
    };
  }
  static getDerivedStateFromError(error) {
    return { hasError: false };
  }

  render() {
    if (this.state.hasError)
      return (
        <div class="alert alert-danger">
          <strong>Error!!!</strong> ErrorBoundary Message In Action...Please
          Ignore This Message
        </div>
      );

    return this.props.children;
  }
}

export default ErrorBoundary;
