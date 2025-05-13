
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

export type LeadSource = "register" | "login" | "hero";

export interface LeadFormData {
  full_name?: string;
  email: string;
  phone?: string;
  message?: string;
  is_subscribed?: boolean;
}

export const useLeadForm = (source: LeadSource) => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const submitLead = async (formData: LeadFormData) => {
    setIsLoading(true);

    try {
      const { error } = await supabase.from("leads").insert({
        ...formData,
        source,
      });

      if (error) throw error;

      toast({
        title: "Thank you!",
        description: "We've received your information.",
      });
      
      return true;
    } catch (error) {
      console.error("Error submitting lead:", error);
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
      
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return { submitLead, isLoading };
};
