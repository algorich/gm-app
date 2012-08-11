# A sample Guardfile
# More info at https://github.com/guard/guard#readme

guard :shell do
  watch(%r{sencha/app/.*}) { `make local` }
end

guard :shell do
  watch('sencha/app.js') { `make local` }
end