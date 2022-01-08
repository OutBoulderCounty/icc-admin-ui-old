import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'

const people = [
  { id: 1, name: 'Text' },
  { id: 2, name: 'Text Area' },
  { id: 3, name: 'Number' },
  { id: 4, name: 'Select' },
  { id: 5, name: 'Radio Buttons'},
  { id: 6, name: 'Checkboxes'},
  { id: 7, name: 'Header'},
  { id: 8, name: 'Line'}
]

  /*
  react final form use as an example or use this demo
  https://github.com/final-form/builder-demo

  top input form name
  field type define each individual form element; text, number; client is able to use selected form element
  field label describe the form
  field categories (may not be used)
  */ 

  //use ReactSelect for select element ON OTHER DIRECTORY
  //react-select/creatable 2nd select element MAY NOT BE USED 

  /*
  1. NEED A SAVE FORM BUTTON 
  2. NEED CONTROLLED INPUTS
  3. LOOK AT OLDER DIRECTORY FUNCTIONALITY
  */

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function FieldOptions() {
  const [selected, setSelected] = useState(people[3])
  const [formName, setFormName] = useState('') //name input
  const [isChecked, setIsChecked] = useState(false); //checkbox

  return (
    <div className="ml-6 mt-8 md:w-1/2">
      <Listbox value={selected} onChange={setSelected}>
        {({ open }) => (
          <>
            <Listbox.Label className="block text-sm font-medium text-gray-700">Field Type: </Listbox.Label>
            <div className="mt-1 relative">
              <Listbox.Button className="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                <span className="block truncate">{selected.name}</span>
                <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </span>
              </Listbox.Button>

              <Transition
                show={open}
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                  {people.map((person) => (
                    <Listbox.Option
                      key={person.id}
                      className={({ active }) =>
                        classNames(
                          active ? 'text-white bg-indigo-600' : 'text-gray-900',
                          'cursor-default select-none relative py-2 pl-3 pr-9'
                        )
                      }
                      value={person}
                    >
                      {({ selected, active }) => (
                        <>
                          <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                            {person.name}
                          </span>

                          {selected ? (
                            <span
                              className={classNames(
                                active ? 'text-white' : 'text-indigo-600',
                                'absolute inset-y-0 right-0 flex items-center pr-4'
                              )}
                            >
                              <CheckIcon className="h-5 w-5" aria-hidden="true" />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
      <div className='mt-8'>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Field Label: 
        </label>
        <div className="mt-1">
          <input
            type="text"
            name="fieldLabel"
            id="fieldLabel"
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-400 rounded-md py-4"
            placeholder="Name:"
          />
        </div>
      </div> 
      {/* <div className="mt-8">
        <Listbox value={selected} onChange={setSelected}>
          {({ open }) => (
            <>
              <Listbox.Label className="block text-sm font-medium text-gray-700">Field Category: </Listbox.Label>
              <div className="mt-1 relative">
                <Listbox.Button className="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                  <span className="block truncate">{selected.name}</span>
                  <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </span>
                </Listbox.Button>

                <Transition
                  show={open}
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                    {people.map((person) => (
                      <Listbox.Option
                        key={person.id}
                        className={({ active }) =>
                          classNames(
                            active ? 'text-white bg-indigo-600' : 'text-gray-900',
                            'cursor-default select-none relative py-2 pl-3 pr-9'
                          )
                        }
                        value={person}
                      >
                        {({ selected, active }) => (
                          <>
                            <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                              {person.name}
                            </span>

                            {selected ? (
                              <span
                                className={classNames(
                                  active ? 'text-white' : 'text-indigo-600',
                                  'absolute inset-y-0 right-0 flex items-center pr-4'
                                )}
                              >
                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </>
          )}
        </Listbox>        
      </div> */}

      <fieldset className="space-y-5 mt-4">
        <legend className="sr-only">Notifications</legend>
        <div className="relative flex items-start">
          <div className="mr-3 text-sm">
            <label htmlFor="comments" className="font-medium text-gray-700">
              Required
            </label>
          </div>

          <div className="flex items-center h-5">
            <input
              id="comments"
              aria-describedby="comments-description"
              name="comments"
              type="checkbox"
              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
              onChange={() => setIsChecked(!isChecked)}
              checked={isChecked}
            />
          </div>
        </div>
      </fieldset>
      <div className="mt-8 flex justify-around w-full">
        <button 
          type="button"
          className="items-center py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-violet hover:bg-violet-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-24 text-center"
        >
          Add
        </button>
        <button
          type="button"
          className="items-center py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-violet hover:bg-violet-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-24 text-center"
        >
          Reset
        </button>              
      </div>                            
    </div>    

  )
}
