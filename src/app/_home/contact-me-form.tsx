'use client'
import { Listbox, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import ArrowDownIcon from '@/assets/svg/arrow-down.svg'
import classNames from 'classnames'

const listOptions = [
  {
    id: '1',
    name: '1',
  },
  {
    id: '2',
    name: '2',
  },
]

const ContactMeForm = ({ hidden }: { hidden: boolean }) => {
  const [selected, setSelected] = useState(listOptions[0])
  return (
    <form
      className={classNames('grid max-w-80 grid-cols-1 not-mobile:grid-cols-2 gap-4', {
        'slide-in-content': !hidden,
      })}
    >
      <div className="flex flex-col not-mobile:col-span-1">
        <label className="mb-2 text-lg font-medium text-slate-400">Name</label>
        <input className="rounded p-2" />
      </div>
      <div className="flex flex-col col-span-1">
        <label className="mb-2 text-lg font-medium text-slate-400">Email</label>
        <input className="rounded p-2" />
      </div>
      <div className="flex flex-col col-span-1 not-mobile:col-span-2">
        <label className="mb-2 text-lg font-medium text-slate-400">Type of enquiry</label>

        <Listbox value={selected} onChange={setSelected}>
          <div className="relative">
            <Listbox.Button className="w-full bg-white rounded p-2 relative text-left">
              <span className="block truncate">{selected.name}</span>
              <span className="absolute inset-y-0 right-0 flex items-center pr-2">
                <ArrowDownIcon className="text-slate-600" />
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              enter="transition-opacity duration-50 ease-in"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-100 ease-in"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute bg-white w-full overflow-auto rounded shadow shadow-slate-800 mt-1">
                {listOptions.map((option) => (
                  <Listbox.Option
                    key={option.id}
                    value={option}
                    className="px-4 py-2 hover:bg-slate-400 transition-colors duration-300"
                  >
                    {option.name}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      </div>
      <div className="flex flex-col col-span-1 not-mobile:col-span-2">
        <label className="mb-2 text-lg font-medium text-slate-400">Message</label>
        <textarea className="rounded p-2" rows={5} />
      </div>
    </form>
  )
}

export default ContactMeForm
