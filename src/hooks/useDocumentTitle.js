// src/hooks/useDocumentTitle.js
import { useEffect } from "react";

function useDocumentTitle(pageTitle) {
  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);
}


export default useDocumentTitle;
