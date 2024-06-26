"use cleint" 
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input"
import { planSchema } from "@/schemas/planSchema"
import MultipleSelector, { Option } from '@/components/ui/multiple-selector';
import { useRouter } from "next/navigation";
import { useEffect, useState } from 'react';


export function CreatePlan() {
    const form = useForm<z.infer<typeof planSchema>>({
        resolver: zodResolver(planSchema),
        defaultValues: {
          _id:"",
          planName: "",
          company: "",
          status: "",
          products:[],
          planPrice: 0,
        },
      });
      const router = useRouter();
      const [options, setOptions] = useState<Option[]>([]);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState<string | null>(null);
      const [companies, setCompanies] = useState([]);
      useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('/api/item'); // Adjust the endpoint as necessary
                if (!response.ok) {
                    throw new Error('Failed to fetch products');
                }
                const data = await response.json();
                const productOptions = data.data.map((product: { productName: string, _id: string }) => ({
                    label: product.productName,
                    value: product._id,
                }));
                setOptions(productOptions);
                setLoading(false);
            } catch (err) {
                setError('Failed to load products');
                setLoading(false);
            }
        };

        fetchProducts();
        const fetchCustomers = async () => {
          try {
            const response = await fetch('/api/customer');
            if (!response.ok) {
              throw new Error(`Failed to fetching customers`);
            }
            const data=await response.json();
            console.log("Response data:",data.data[0]);
            
            setCompanies(data.data);
          } catch (err) {
            console.error('Error fetching data:', err);
          }
        };
    
        fetchCustomers();
    }, []);

      async function onSubmit(values: z.infer<typeof planSchema>) {
        
        console.log("submit:",values);
        try {
          const productIds = values.products.map(item => item.value);
          const response = await fetch('/api/plan', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                  planName: values.planName,
                  company: values.company,
                  planPrice: values.planPrice,
                  products: productIds,
                  status:values.status
              }),
          });

          const data = await response.json();
          console.log("Created");
          if (!response.ok) {
              throw new Error(data.message || 'Failed to create plan');
          }

          console.log('Plan created:', data);
          router.push('/admin/dashboard');
      } catch (error) {
          console.error('Error creating plan:', error);
      }
      }

      if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;
    

  return (
    <Form {...form}>
      <form noValidate onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            
            <FormField
              control={form.control}
              name="planName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Plan name</FormLabel>
                  <FormControl>
                    <Input  placeholder="Enter the plan name" {...field} />
                  </FormControl>
                 
                  <FormMessage />
                </FormItem>
              )}
            />

<FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select the company name" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                {companies.map((company:{_id:string,name:string,email:string, contract_id:string, cost_rate:number}) => (
                                        <SelectItem key={company._id} value={company._id}>
                                            {company.name}
                                        </SelectItem>
                                    ))}
                
                </SelectContent>
              </Select>
              <FormDescription className="p-2 text-xm text-yellow-300 opacity-60 ">
  If the company name is not listed, please create a new company in the Customers section.
</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />



            
            <FormField
          control={form.control}
          name="products"
          render={({ field }) => (
            <FormItem>
              <FormLabel>BGC</FormLabel>
              <FormControl>
                <MultipleSelector
                  value={field.value}
                  onChange={field.onChange}
                  defaultOptions={options}
                  placeholder="Select a BGC"
                  emptyIndicator={
                    <p className="text-center text-lg leading-10 text-gray-600 dark:text-gray-400">
                      no results found.
                    </p>
                  }
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />



            <FormField
              control={form.control}
              name="planPrice"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Price</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="Enter the price" {...field} />
                  </FormControl>
                  <FormDescription>
                    
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />


<FormField
          control={form.control}
          name="status"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Status</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select the status" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}