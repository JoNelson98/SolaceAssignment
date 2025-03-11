## Summary of Changes and Error Fixes in the Initial Component

-   Hydration Error from Invalid Table Structure
-   Direct Dom Manipulation
-   Incorrect Filtering Logic
-   Uncontrolled Input Component
-   No Loading state or Error Handling for Fetch
-   Incomplete Reset Functionality
-   Missing Key Prop in Mapped Elements

## Why The Initial Implementation Was Problematic

The original setup had several issues that made it unsuitable for querying hundreds of thousands of advocates

-   **Fetching Everything**: Loading all advocates without limits or filters caused slow queries and excessive memory use, leading to potential server crashes.
-   **Client Side Filtering**: Sending the entire dataset to the client for filtering was impractical, as browsers can’t handle that much data, and it wasted bandwidth.
-   **No Pagination**: Without pagination, users couldn’t navigate results efficiently, and the app would become unresponsive.
-   **Unoptimized Queries**: Lack of indexing and filtering in the database meant full table scans, which are slow for large tables.

## How the Refactored Version Improves Performance

-   **Server Side Efficiency**: Fetching data on the server reduces client overhead and delivers content faster.
-   **Database Optimization**: Filtering and pagination in the database combined with indexes, make queries fast and lightweight.
-   **Scalable Design**: Pagination and targeted fetching ensure the app performs well regardless of dataset size.
-   **Better User Experience**: Faster loads and responsive navigation improve usability.

## Thoughts and Potential Improvements

-   Complex backgrounds with gradients or masks might cause performance issues on low-end devices due to frequent repaints.
-   Add structured logging to track query times and API performance
-   Adopt cursor-based pagination for consistent performance
-   Debounce feature since im querying data with keystrokes
-   Using incremental static generation rather than server side rendering on page load
-   Add rate limiting to API routes using middleware
-   tables are partially cut off for table height consistency id add ellipses with a popover on hover for the full context or a modal on click
-   adding a trpc layer to the api for type safety (good for error reduction)
