-- Create function to update sitemap status when blog posts change
CREATE OR REPLACE FUNCTION public.update_sitemap_status_on_blog_change()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $function$
BEGIN
  -- Update or insert sitemap status to mark regeneration needed
  INSERT INTO public.sitemap_status (id, last_generated_at, url_count, generated_by)
  VALUES (gen_random_uuid(), now() - interval '1 day', 0, 'trigger')
  ON CONFLICT (id) DO UPDATE SET
    last_generated_at = now() - interval '1 day';
  
  RETURN COALESCE(NEW, OLD);
END;
$function$;

-- Create trigger for INSERT
CREATE TRIGGER blog_posts_sitemap_insert
  AFTER INSERT ON public.blog_posts
  FOR EACH ROW
  EXECUTE FUNCTION public.update_sitemap_status_on_blog_change();

-- Create trigger for UPDATE
CREATE TRIGGER blog_posts_sitemap_update
  AFTER UPDATE ON public.blog_posts
  FOR EACH ROW
  EXECUTE FUNCTION public.update_sitemap_status_on_blog_change();

-- Create trigger for DELETE
CREATE TRIGGER blog_posts_sitemap_delete
  AFTER DELETE ON public.blog_posts
  FOR EACH ROW
  EXECUTE FUNCTION public.update_sitemap_status_on_blog_change();