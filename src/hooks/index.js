import { useContext, useMemo } from "react";
import { useMutation as useApolloMutation } from "@apollo/client";

import { chooseTranslation } from "api/i18n";
import { globalErrorHandler } from "apolo";
import TranslationContext from "Layout/TranslationContext";

export function useTranslations() {
  const getTranslation = useContext(TranslationContext);

  const result = useMemo(
    () => ({ getTranslation, chooseTranslation: translations => chooseTranslation(translations) }),
    [getTranslation]
  );

  return result;
}

export const useMutation = useApolloMutation;
