'use client'
import { Listbox, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import classNames from 'classnames'
import { ToastContainer, toast } from 'react-toastify'
import { useForm, SubmitHandler, Controller, SubmitErrorHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import ArrowDownIcon from '@/assets/svg/arrow-down.svg'
import Toast from '@/components/toast'
import { schema } from './form-schema'

const listOptions: string[] = [
  'Freelance project proposal',
  'Full time project',
  'Tutoring request',
]

interface ContactMeFormInputs {
  name: string
  email: string
  type: string
  message: string
}

const initialFormValues: ContactMeFormInputs = {
  name: '',
  email: '',
  type: listOptions[0],
  message: '',
}
const ContactMeForm = ({ hidden }: { hidden: boolean }) => {
  const {
    register,
    handleSubmit,
    getValues,
    control,
    formState: { errors },
  } = useForm<ContactMeFormInputs>({
    defaultValues: initialFormValues,
    resolver: yupResolver(schema),
    mode: 'onBlur',
  })
  const onSubmit: SubmitHandler<ContactMeFormInputs> = (data) => {
    toast.success(
      <Toast
        title="All good!"
        description={`Thanks for your submission ${data.name}, we will get back to you shortly`}
      />
    )
  }

  const onError: SubmitErrorHandler<ContactMeFormInputs> = () => {
    toast.error(
      <Toast title="Oops!" description={`Something went wrong, please try again later!`} />
    )
  }
  return (
    <form
      className={classNames('grid max-w-80 grid-cols-1 not-mobile:grid-cols-2 gap-x-4 gap-y-1', {
        'slide-in-content': !hidden,
      })}
      onSubmit={handleSubmit(onSubmit, onError)}
    >
      <div className="flex flex-col not-mobile:col-span-1">
        <label className="mb-2 text-lg font-medium text-slate-400">Name</label>
        <input
          {...register('name')}
          className={classNames('rounded p-2 border-2 border-solid border-slate-900 outline-none', {
            'border-red-600': errors.name,
          })}
        />
        <p className={classNames('text-red-600 min-h-[24px]', { invisible: !errors.name })}>
          {errors.name?.message}
        </p>
      </div>
      <div className="flex flex-col col-span-1">
        <label className="mb-2 text-lg font-medium text-slate-400">Email</label>
        <input
          className={classNames('rounded p-2 border-2 border-solid border-slate-900 outline-none', {
            'border-red-600': errors.email,
          })}
          {...register('email')}
        />
        <span className={classNames('text-red-600 min-h-[24px]', { invisible: !errors.email })}>
          {errors.email?.message}
        </span>
      </div>
      <div className="flex flex-col col-span-1 not-mobile:col-span-2">
        <label className="mb-2 text-lg font-medium text-slate-400">Type of enquiry</label>
        <Controller
          control={control}
          defaultValue={listOptions[0]}
          name="type"
          render={({ field }) => (
            <Listbox {...field}>
              <div className="relative">
                <Listbox.Button className="w-full bg-white rounded p-2 border-2 border-solid border-slate-900 outline-none relative text-left">
                  <span className="block truncate">{getValues().type}</span>
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
                    {listOptions.map((option, i) => (
                      <Listbox.Option
                        key={i}
                        value={option}
                        className="px-4 py-2 hover:bg-slate-400 transition-colors duration-300"
                      >
                        {option}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>
          )}
        />
        <span className={classNames('text-red-600 min-h-[24px]', { invisible: !errors.type })}>
          {errors.type?.message}
        </span>
      </div>
      <div className="flex flex-col col-span-1 not-mobile:col-span-2">
        <label className="mb-2 text-lg font-medium text-slate-400">Message</label>
        <textarea
          className={classNames('rounded p-2 border-2 border-solid border-slate-900 outline-none', {
            'border-red-600': errors.message,
          })}
          rows={5}
          {...register('message')}
        />
        <span className={classNames('text-red-600 min-h-[24px]', { invisible: !errors.message })}>
          {errors.message?.message}
        </span>
      </div>
      <div className="flex flex-col col-span-1 not-mobile:col-span-2">
        <button
          type="submit"
          className="bg-slate-400 hover:bg-slate-500 transition-colors rounded p-2 text-slate-800 font-medium"
        >
          Send
        </button>
      </div>
      <ToastContainer />
    </form>
  )
}

export default ContactMeForm
