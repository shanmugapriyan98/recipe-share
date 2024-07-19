'use client';
import { FormEvent, useRef, useState } from "react"
import SuccessModal from "../successModal";

export default function Page() {

  const formref = useRef<HTMLFormElement>(null)
  const [successOpen, setSuccessOpen] = useState(false);
  const [errorOpen, setErrorOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    
    event.preventDefault()
 
    const formData = new FormData(event.currentTarget)
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_DJANGO_API_ENDPOINT}/recipe/`, {
        method: 'POST',
        body: formData,
      }) 
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const data = await response.json()
      setSuccessOpen(true);
      if(formref.current) formref.current.reset();

    } catch (error:any) {  
      setErrorMessage(error.message);
      console.error(errorMessage);
      setErrorOpen(true);
    }
  }

  return (
    <div className="px-6 py-6">
      <form ref={formref} onSubmit={onSubmit}>
        <div className="space-y-12">
          <div className="border-b border-gray-300 pb-12">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Add your recipe</h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            Add your recipe with clear instructions. You can view this recipe once you submit this form. 
          </p>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  <strong>Name of the Recipe</strong>
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Recipe Name Here"
                      autoComplete="recipename"
                      className="block flex-1 border-0 bg-white py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="info"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  <strong>Recipe Instructions</strong>
                </label>
                <div className="mt-2">
                  <textarea
                    id="info"
                    name="info"
                    rows={3}
                    className="block w-full rounded-md border-0 bg-white py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={""}
                  />
                </div>
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Write a few sentences about your recipe.
                </p>
              </div>

              {/* <div className="col-span-full">
                <label
                  htmlFor="cover-photo"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Photo of the recipe
                </label>
                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-300 px-6 py-10 bg-white">
                  <div className="text-center">
                    <PhotoIcon
                      aria-hidden="true"
                      className="mx-auto h-12 w-12 text-gray-300"
                    />
                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs leading-5 text-gray-600">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Submit
          </button>
        </div>
      </form>

      { successOpen && <SuccessModal></SuccessModal>}
    </div>
  );
}